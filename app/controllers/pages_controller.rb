class PagesController < ApplicationController
  def home
    @locations = Location.all
    @markers = @locations.geocoded.map do |location|
      {
        lat: location.lat,
        lng: location.lon,
        image_url: helpers.asset_url('evacuation.jpeg'),
        id: location.id
      }
    end
  end
end
