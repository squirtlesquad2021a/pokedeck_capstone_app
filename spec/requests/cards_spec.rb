require 'rails_helper'

RSpec.describe "Cards", type: :request do
  describe "GET /cards" do
    it "gets a list of cards" do
      Card.create(
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
        get '/cards'

        card_response = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(card_response.length).to eq 1
        first_card = card_response.first
        expect(first_card['name']).to eq 'Alakazam'
        expect(first_card['pokemon_type']).to eq 'Psychic'
        expect(first_card['set_id']).to eq 'base1'
        expect(first_card['set_name']).to eq 'Base'
        expect(first_card['set_series']).to eq 'Base'
        expect(first_card['number']).to eq '1'
        expect(first_card['rarity']).to eq 'Rare Holo'
        expect(first_card['image']).to eq 'https://images.pokemontcg.io/base1/1_hires.png'
        expect(first_card['price']).to eq 250
      end
  end

  # describe "GET /cards" do
  #   it "raises an error if there are no cards" do
  #       get '/cards'

  #       card_response = JSON.parse(response.body)
  #       expect(response).to have_http_status(404)
  #     end
  # end
end
