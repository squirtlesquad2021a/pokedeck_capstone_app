require 'rails_helper'

RSpec.describe "DailyCards", type: :request do
  describe "GET /eligibility_check/:user_id" do
      it 'a new user is not eligible' do
        #arrange
        user1 =User.create(
          email:"userone@noemail.com",
          password:"password",
          username:"userone"
        )

        sign_in(user1)

        #act
        get "/eligibility_check/"
        #assert
        response_body = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(response_body).to eq false
      end

      it 'if at least 1 day passes, user is eligible' do
        #arrange
        user1 =User.create(
          email:"userone@noemail.com",
          password:"password",
          username:"userone",
          timestamp_of_last_daily_card: 1.day.ago
        )

        sign_in(user1)

        #act
        get "/eligibility_check/"
        #assert
        response_body = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(response_body).to eq true
      end
  end
end
