class DailyCardsController < ApplicationController

  # before_action :authenticate_user!

  def eligibility_check
    current_time = Time.now
    last_card = User.find(params[:user_id]).timestamp_of_last_daily_card
    if last_card.nil?
      last_card = Time.now
    end

    time_elapsed = current_time - last_card
    seconds_in_a_day = 86400
    render json: time_elapsed >= seconds_in_a_day

  end
end
