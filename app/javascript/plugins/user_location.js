
const userLocation = (callback) => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      document.querySelector("#nearest-btn").href = `/location?lon=${lon}&lat=${lat}`;
      document.querySelector(".userlon").innerText = lon;
      document.querySelector(".userlat").innerText = lat;
    });
  }
}

export { userLocation };
