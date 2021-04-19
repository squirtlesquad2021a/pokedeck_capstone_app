class DailyCardsController < ApplicationController

  def eligibility_check
    current_time = Time.now
    last_card = User.find(params[:user_id]).timestamp_of_last_daily_card
    if last_card.nil?
      last_card = Time.now
    end

    time_elapsed = current_time - last_card
    if time_elapsed >= 86400
      eligible = true
    else
      eligible = false
    end

    render json: eligible

  end
end
