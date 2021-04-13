class CreateBinders < ActiveRecord::Migration[6.1]
  def change
    create_table :binders do |t|
      t.integer :user_id
      t.integer :card_id
      t.integer :quantity
      t.boolean :favorite

      t.timestamps
    end
  end
end
