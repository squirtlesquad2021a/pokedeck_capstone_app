require 'rails_helper'

RSpec.describe "Binders", type: :request do
  describe "GET /binders" do
    it 'gets a list of binders' do
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
      Binder.create(
        user_id:user1.id,
        card_id:card1.id,
        quantity:1,
        favorite:true
      )
      #act
      get '/binders'
      #assert
      binder_response = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(binder_response.length).to eq 1
      first_binder = binder_response.first
      expect(first_binder['quantity']).to eq 1
      expect(first_binder['favorite']).to eq true
    end
  end
  describe "PUT /binders/:id" do
    it "updates a binder" do
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
      binder1 = Binder.create(
        user_id:user1.id,
        card_id:card1.id,
        quantity:1,
        favorite:true
      )

      update_binder_params = {
        binder: {
          quantity: 2,
          favorite: false
        }
      }

      #Act
      put "/binders/#{binder1.id}", params: update_binder_params

      #assert
      updated_binder_response = JSON.parse(response.body)
      expect(updated_binder_response['quantity']).to eq 2
      expect(updated_binder_response['favorite']).to eq false
      expect(response).to have_http_status(200)
    end
  end

  describe "GET /deckprice/:user_id" do
    it "gets user's deck price" do
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
      sign_in user1
      #act
      get "/deckprice/#{user1.id}"
      #assert
      deck_price_response = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(deck_price_response).to eq 899.99

    end
  end

  describe "POST /boosterpack/" do
    it "Creates 10 binders" do
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
      card3 = Card.create(
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
      card4 = Card.create(
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
      card5 = Card.create(
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
      card6 = Card.create(
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
      card7 = Card.create(
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
      card8 = Card.create(
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
      card9 = Card.create(
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
      card10 = Card.create(
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

      sign_in user1
      #Act
      post "/boosterpack/"

      #assert
      boosterpack_response = JSON.parse(response.body)
      expect(boosterpack_response.length).to eq 10
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /boosterpack/" do
    it "Creates 10 binders" do
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

      sign_in user1
      #Act
      post "/dailycard/"

      #assert
      daily_card_response = JSON.parse(response.body)
      expect(daily_card_response['quantity']).to eq 1
      expect(daily_card_response['favorite']).to eq false
      expect(response).to have_http_status(200)
    end
  end

end
