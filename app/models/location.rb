class Location < ApplicationRecord
  reverse_geocoded_by :lat, :lon
  after_validation :reverse_geocode
end
