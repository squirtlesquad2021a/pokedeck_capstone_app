class BindersController < ApplicationController
  before_action :authenticate_user!, only:[:booster_pack,:daily_card,:deck_price]

  def index
    binders = Binder.all

    binder_with_cards = binders.map do |binder|
      binder_attributes = binder.attributes
      binder_attributes.merge(card_data: binder.card.attributes)
    end
    render json: binder_with_cards
  end

  def show
    binder = Binder.find(params[:id])
    render json: binder
  end

  def update
    binder = Binder.find(params[:id])
    binder.update(binder_params)
    render json: binder
  end

  def booster_pack
    # initialize a blank array to store the Pokemon card ids
    pokemon_card_numbers = []

    begin
      # generate a random number from 1 to 102
      # (add 1 because otherwise it gives you numbers from 0-101)
      number = rand(Card.count)+Card.first.id
      # push the number to the array if it is a unique number
      pokemon_card_numbers.push(number) unless pokemon_card_numbers.include?(number)
    # do this until there are 10 items in the array
    end while pokemon_card_numbers.size < 10

    # create the 10 new Pokemon binders
    pokemon_card_numbers.each do |card_id|
      Binder.create(user_id: current_user.id, card_id: card_id, quantity: 1, favorite: false)
    end

    user = current_user
    user.timestamp_of_last_daily_card = Time.now
    user.save

    # return the user's cards
    render json: current_user.cards
  end

  def daily_card
    # generate a random number for the new card being added to the user's collection
    random_card = rand(Card.count)+Card.first.id

    # do a query to check for any binder(s) that exist for the user and the random card
    binders = Binder.where(["user_id = '%i' and card_id = '%i'", current_user.id, random_card])

    # check if the user already owns the card
    if binders.length > 0
      # select the first binder in the 'binders' array
      binder = binders.first
      # update the binder to increment the count by 1
      binder.increment!(:quantity)

    # else, create a new binder
    else
      binder = Binder.create(user_id: current_user.id, card_id: random_card, quantity: 1, favorite: false)
    end

    user = current_user
    user.timestamp_of_last_daily_card = Time.now
    user.save

    render json: binder

  end


  def deck_price
    # create a variable to hold the sum
    sum = 0

    # query for all of the user's binders
    binders = User.find(params[:user_id]).binders

    # iterate through the user's binders to calculate the subtotal of that binder
    binders.each do |binder|
      binder_price = binder.quantity * binder.card.price
      # add that binder's subtotal to the sum
      sum += binder_price
    end

    # return the sum
    render json: sum.round(2)

    #user info = {
    #   deck_price: $XX.XX
    #   deck_size: number
    #   ranking: number
    # }
  end

  private
  def binder_params
      params.require(:binder).permit(:user_id, :card_id, :quantity, :favorite)
  end

end
