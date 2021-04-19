class CreateDailyCards < ActiveRecord::Migration[6.1]
  def change
    create_table :daily_cards do |t|

      t.timestamps
    end
  end
end
