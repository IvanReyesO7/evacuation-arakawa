import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const initMapbox = () => {
  const mapElement = document.getElementById('map');

  const fitMapToMarkers = (map, markers) => {
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
    map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
  };

  if (mapElement) {
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;




    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });
    const markers = JSON.parse(mapElement.dataset.markers);
    markers.forEach((marker) => {
      const element = document.createElement('div');
      element.className = 'marker';
      element.style.backgroundImage = `url('${marker.image_url}')`;
      element.style.backgroundSize = 'contain';
      element.style.width = '25px';
      element.style.height = '25px';

      new mapboxgl.Marker(element)
        .setLngLat([ marker.lng, marker.lat ])
        .addTo(map);
    });
    const routes = () => {
        // make a directions request using cycling profile
        // an arbitrary start will always be the same
        // only the end or destination will change
        var start = [139.78771710281782, 35.728317674676845];
        var end = [139.79233149891627,35.73811589177208]
        var route = {
          'type': 'FeatureCollection',
          'features': [
            {
            'type': 'Feature',
            'geometry': {
              'type': 'LineString',
              'coordinates': [start, end]
             }
            }
          ]
        };

        map.on('load', function () {
        // Add a source and layer displaying a point which will be animated in a circle.
        map.addSource('route', {
        'type': 'geojson',
        'data': route
        });


        map.addLayer({
          'id': 'route',
          'source': 'route',
          'type': 'line',
          'paint': {
          'line-width': 2,
          'line-color': '#007cbf'
          }
        });

      });
    };
    var canvas = map.getCanvasContainer();
    routes();
    fitMapToMarkers(map, markers);
  }
};

export { initMapbox };
