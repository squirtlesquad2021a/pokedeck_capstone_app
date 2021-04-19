class RenameTimestampColumnInUsers < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :TimestampOfLastDailyCard, :timestamp_of_last_daily_card
  end
end
