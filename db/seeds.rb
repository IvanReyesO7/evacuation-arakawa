require 'json'
require 'open-uri'

url = 'https://raw.githubusercontent.com/IvanReyesO7/evacuation-arakawa/master/db/database.json'
locations = JSON.parse(open(url).read)

puts "Deleting all existing locations..."
Location.destroy_all
locations.each do |location|
  new_location = Location.new(
    name: location["name"],
    name_romaji: location["name_romaji"],
    name_kana: location["name_kana"],
    alt_name: location["alt_name"],
    lon: location["lon"],
    lat: location["lat"]
    )
  new_location.save
  puts "#{new_location.name} created"
end

