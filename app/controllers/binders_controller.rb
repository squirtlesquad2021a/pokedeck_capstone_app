class BindersController < ApplicationController

  def index
    binders = Binder.all

    binder_with_cards = binders.map do |binder|
      binder_attributes = binder.attributes
      binder_attributes.merge(card_data: binder.card.attributes)
    end
    render json: binder_with_cards
  end

  def booster_pack
    # initialize a blank array to store the Pokemon card ids
    pokemon_card_numbers = []

    begin
      # generate a random number from 1 to 102
      # (add 1 because otherwise it gives you numbers from 0-101)
      number = rand(102)+1
      # push the number to the array if it is a unique number
      pokemon_card_numbers.push(number) unless pokemon_card_numbers.include?(number)
    # do this until there are 10 items in the array
    end while pokemon_card_numbers.size < 10

    # create the 10 new Pokemon binders
    pokemon_card_numbers.each do |card_id|
      Binder.create(user_id: params[:user_id], card_id: card_id, quantity: 1, favorite: false)
    end

    # return the user's cards
    render json: User.find(params[:user_id]).cards
  end

  def daily_card
    # generate a random number for the new card being added to the user's collection
    random_card = rand(102)+1

    # do a query to check for any binder(s) that exist for the user and the random card
    binders = Binder.where(["user_id = '%i' and card_id = '%i'", params[:user_id], random_card])

    # check if the user already owns the card
    if binders.length > 0
      # select the first binder in the 'binders' array
      binder = binders.first
      # update the binder to increment the count by 1
      binder.increment!(:quantity)

    # else, create a new binder
    else
      binder = Binder.create(user_id: params[:user_id], card_id: random_card, quantity: 1, favorite: false)
    end

    render json: binder

  end

end
