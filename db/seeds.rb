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
        username: 'guerrero',
        password: 'password'
    },
    # {
    #     email: 'fernando@email.com',
    #     username: 'fernando',
    #     password: 'password'
    # },
    # {
    #     email: 'lex@email.com',
    #     username: 'lex',
    #     password: 'password'
    # },
    # {
    #     email: 'allen@email.com',
    #     username: 'allen',
    #     password: 'password'
    # }
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

    pokemon_type = card["supertype"]
    if card["supertype"] == "Pokémon"
      pokemon_type = card["types"][0]
    end
    if card.key?("tcgplayer") == false
      price = 0
    else
      price_types = ["holofoil", "reverseHolofoil", "1stEditionHolofoil", "normal"]
      price = 0
      price_types.each do |type|
        if card["tcgplayer"]["prices"].key?(type)
          price = card["tcgplayer"]["prices"][type]["high"]
        end
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
# binders = [
#   {
#     user_id: User.first.id,
#     card_id: Card.first.id,
#     quantity: 1,
#     favorite: true
#   },
#   {
#     user_id: User.second.id,
#     card_id: Card.second.id,
#     quantity: 1,
#     favorite: true
#   },
#   {
#     user_id: User.third.id,
#     card_id: Card.find(15).id,
#     quantity: 3,
#     favorite: true
#   },
#   {
#     user_id: User.fourth.id,
#     card_id: Card.fourth.id,
#     quantity: 2,
#     favorite: false
#   },
#   {
#     user_id: User.first.id,
#     card_id: Card.find(10).id,
#     quantity: 1,
#     favorite: false
#   },
#   {
#     user_id: User.second.id,
#     card_id: Card.find(99).id,
#     quantity: 4,
#     favorite: true
#   },
#   {
#     user_id: User.third.id,
#     card_id: Card.find(70).id,
#     quantity: 1,
#     favorite: false
#   },
#   {
#     user_id: User.fourth.id,
#     card_id: Card.find(40).id,
#     quantity: 1,
#     favorite: false
#   }
# ]

# binders.each do |attributes|
#     Binder.create attributes
# end
