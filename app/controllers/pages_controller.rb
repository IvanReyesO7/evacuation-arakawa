class PagesController < ApplicationController
  def home
    @locations = Location.all
    @markers = @locations.geocoded.map do |location|
      {
        lat: location.lat,
        lng: location.lon
      }
    end
    raise
  end
end
