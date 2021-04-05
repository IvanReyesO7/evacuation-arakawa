class LocationsController < ApplicationController
  def location
    @locations = Location.all
    @markers = @locations.geocoded.map do |location|
      {
        lat: location.lat,
        lng: location.lon,
        image_url: helpers.asset_url('evacuation.jpeg'),
        id: location.id
      }
    end
    @nearest = Location.near([params[:lat], params[:lon]], 3)
  end
end
