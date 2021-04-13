class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :type
      t.string :set_id
      t.string :set_name
      t.string :set_series
      t.string :number
      t.string :rarity
      t.string :image
      t.float :price

      t.timestamps
    end
  end
end
