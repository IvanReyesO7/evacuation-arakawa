class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :alt_name
      t.float :lon
      t.float :lat

      t.timestamps
    end
  end
end
