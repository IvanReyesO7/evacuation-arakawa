class AddNameKanjiToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :name_kana, :string
  end
end
