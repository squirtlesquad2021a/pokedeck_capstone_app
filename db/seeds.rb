# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
users = [
    {
        email: 'guerrero@email.com',
        password: 'password'
    },
    {
        email: 'fernando@email.com',
        password: 'password'
    },
    {
        email: 'lex@email.com',
        password: 'password'
    },
    {
        email: 'allen@email.com',
        password: 'password'
    }
]

users.each do |attributes|
    User.create attributes
end


# Cards
response = RestClient.get 'https://api.pokemontcg.io/v2/cards?q=set.id:base1'
json = JSON.parse response
puts json
if !json.nil?
  json["data"].map do |card|
    if card["supertype"] == "Pokémon"
      pokemon_type = card["types"][0]
    else
      pokemon_type = card["supertype"]
    end
    if card.key?("tcgplayer") == false
      price = 0
    else
      if card["tcgplayer"]["prices"].key?("holofoil")
        price = card["tcgplayer"]["prices"]["holofoil"]["high"]
      elsif card["tcgplayer"]["prices"].key?("reverseHolofoil")
        price = card["tcgplayer"]["prices"]["reverseHolofoil"]["high"]
      elsif card["tcgplayer"]["prices"].key?("1stEditionHolofoil")
        price = card["tcgplayer"]["prices"]["1stEditionHolofoil"]["high"]
      elsif card["tcgplayer"]["prices"].key?("normal")
        price = card["tcgplayer"]["prices"]["normal"]["high"]
      else
        price = 0
      end
    end
    Card.create(
      name: "#{card["name"]}",
      pokemon_type: "#{pokemon_type}",
      set_id: "#{card["set"]["id"]}",
      set_name: "#{card["set"]["name"]}",
      set_series: "#{card["set"]["series"]}",
      number: "#{card["number"]}",
      rarity: "#{card["rarity"]}",
      image: "#{card["images"]["large"]}",
      price: price
    )
  end
else
  puts "error seeding cards"
end


# Binders
  # t.integer "user_id"
  # t.integer "card_id"
  # t.integer "quantity"
  # t.boolean "favorite"
binders = [
  {
    user_id: User.first.id,
    card_id: Card.first.id,
    quantity: 1,
    favorite: true
  },
  {
    user_id: User.second.id,
    card_id: Card.second.id,
    quantity: 1,
    favorite: true
  },
  {
    user_id: User.third.id,
    card_id: Card.find(15).id,
    quantity: 3,
    favorite: true
  },
  {
    user_id: User.fourth.id,
    card_id: Card.fourth.id,
    quantity: 2,
    favorite: false
  }
]

binders.each do |attributes|
    Binder.create attributes
end