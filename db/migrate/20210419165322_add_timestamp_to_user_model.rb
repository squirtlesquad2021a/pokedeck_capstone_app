class AddTimestampToUserModel < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :TimestampOfLastDailyCard, :datetime
  end
end
