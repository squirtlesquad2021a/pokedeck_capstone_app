require 'rails_helper'

RSpec.describe Binder, type: :model do
  describe "validates binder attributes" do
    it "quantity is present" do
      user1 = User.create(email:"email@email.com",password:"password",username:"user1")
      card1 = Card.create(
        name: "Alakazam",
        pokemon_type: "Psychic",
        set_id: "base1",
        set_name: "Base",
        set_series: "Base",
        number: "1",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base1/1_hires.png",
        price: 250,
      )
      binder1 = Binder.create(
        user_id: user1.id,
        card_id: card1.id,
        favorite: true
      )
      expect(binder1.errors[:quantity]).to_not be_empty
    end

    it "favorite is present" do
      user1 = User.create(email:"email@email.com",password:"password",username:"user1")
      card1 = Card.create(
        name: "Alakazam",
        pokemon_type: "Psychic",
        set_id: "base1",
        set_name: "Base",
        set_series: "Base",
        number: "1",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base1/1_hires.png",
        price: 250,
      )
      binder1 = Binder.create(
        user_id: user1.id,
        card_id: card1.id,
        quantity: 1
      )
      expect(binder1.errors[:favorite]).to_not be_empty
    end

    it "are valid" do
      user1 = User.create(email:"email@email.com",password:"password",username:"user1")
      card1 = Card.create(
        name: "Alakazam",
        pokemon_type: "Psychic",
        set_id: "base1",
        set_name: "Base",
        set_series: "Base",
        number: "1",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base1/1_hires.png",
        price: 250,
      )
      binder1 = Binder.create(
        user_id: user1.id,
        card_id: card1.id,
        quantity: 1,
        favorite: false
      )
      expect(binder1).to be_valid
    end

  end
end
