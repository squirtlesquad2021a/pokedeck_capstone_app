class CreateRankings < ActiveRecord::Migration[6.1]
  def change
    create_table :rankings do |t|

      t.timestamps
    end
  end
end
