require 'rails_helper'

RSpec.describe "Rankings", type: :request do
  
  describe "GET /rankings" do
    it 'gets a list of rankings' do
      #arrange
      user1 =User.create(
        email:"userone@noemail.com",
        password:"P@ssw0rd",
        username:"userone23"
      )
      card1 = Card.create(
        name: "Alakazam",
        pokemon_type: "Psychic",
        set_id: "base1",
        set_name: "Base",
        set_series: "Base",
        number: "1",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base1/1_hires.png",
        price: 250
      )
      card2 = Card.create(
        name: "Blastoise",
        pokemon_type: "Water",
        set_id: "base1",
        set_name: "Base",
        set_series: "Base",
        number: "2",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base1/2_hires.png",
        price: 399.99
      )
      binder1 = Binder.create(
        user_id:user1.id,
        card_id:card1.id,
        quantity:2,
        favorite:true
      )
      binder2 = Binder.create(
        user_id:user1.id,
        card_id:card2.id,
        quantity:1,
        favorite:true
      )
      #act
      get '/rankings'
      #assert
      ranking_response = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(ranking_response.length).to eq 1
      first_ranking = ranking_response.first
      expect(first_ranking['username']).to eq 'userone23'
      expect(first_ranking['most_valuable_card']).to eq 'Blastoise'
      expect(first_ranking['deck_price']).to eq 899.99

    end
  end

end
