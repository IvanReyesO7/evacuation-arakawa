class PagesController < ApplicationController
  def home
    @locations = Location.all
    @markers = @locations.geocoded.map do |location|
      {
        lat: location.lat,
        lng: location.lon,
        image_url: helpers.asset_url('evacuation.png'),
        id: location.id
      }
    end
    @nearest = Location.near([params[:lat], params[:lon]], 3)
    @random = [rand(139.757589..139.810117), rand(35.726423..35.753036)]
  end
end
