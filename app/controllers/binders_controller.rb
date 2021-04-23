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


  def user_statistics
    # need to return:
    # 1) username
    # 2) deck_price
    # 3) deck_size
    # 4) ranking

    # rankings (taken from rankings_controller)
    # get a list of all the users
    users = User.all

    # create an array of user info
    ranking_info = []

    # iterate through the user array using a '.each'
    users.each do |user|
        # create a hash to store the user's information
        user_stats = {}

        # grab each user's username
        user_stats[:username] = user.username

        # calculate the deck price for each user
        # create a variable to hold the sum and the deck_size
        sum = 0
        deck_size = 0

        # query for all of the user's binders
        binders = user.binders

        # if the user has binders, then iterate through the binders
        if binders.length > 0
            # iterate through the user's binders to calculate the subtotal of that binder
            binders.each do |binder|
                binder_price = binder.quantity * binder.card.price
                # add that binder's subtotal to the sum
                sum += binder_price
                deck_size += binder.quantity
            end
        end

        user_stats[:deck_price] = sum.round(2)
        user_stats[:deck_size] = deck_size

        # push 'user_info' to the 'ranking_info' array
        ranking_info.push(user_stats)
    end

    # sort the users by deck price
    # reverse the array
    # limit the array to 10 items
    ranking_info_desc = ranking_info.sort_by { |user| user[:deck_price] }.reverse

    # grab individual user_stats object from ranking_info_desc array
    current_user_stats_index = ranking_info_desc.index { |user| user[:username] == current_user.username }

    current_user_stats = ranking_info_desc[current_user_stats_index]
    current_user_stats.merge!(ranking: current_user_stats_index + 1)

    # return the sum
    render json: current_user_stats

  end

  private
  def binder_params
      params.require(:binder).permit(:user_id, :card_id, :quantity, :favorite)
  end

end
