class AddNameRomajiToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :name_romaji, :string
  end
end
