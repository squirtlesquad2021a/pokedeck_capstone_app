class RankingsController < ApplicationController

    def index
        # get a list of all the users
        users = User.all

        # create an array of user info
        ranking_info = []

        # iterate through the user array using a '.each'
        users.each do |user|
            # create a hash to store the user's information
            user_info = {}

            # grab each user's username
            user_info[:username] = user.username

            # if the user has cards
            if user.cards.length > 0
                # search for each user's most valuable card
                user_info[:most_valuable_card] = user.cards.order(price: :desc).limit(1).first.name
            else
                user_info[:most_valuable_card] = 'No cards'
            end

            # calculate the deck price for each user
            # create a variable to hold the sum
            sum = 0

            # query for all of the user's binders
            binders = user.binders

            # if the user has binders, then iterate through the binders
            if binders.length > 0
                # iterate through the user's binders to calculate the subtotal of that binder
                binders.each do |binder|
                    binder_price = binder.quantity * binder.card.price
                    # add that binder's subtotal to the sum
                    sum += binder_price
                end
            end

            user_info[:deck_price] = sum.round(2)

            # push 'user_info' to the 'ranking_info' array
            ranking_info.push(user_info)
        end

        # sort the users by deck price
        # reverse the array
        # limit the array to 10 items
        top_ten = ranking_info.sort_by { |user| user[:deck_price] }.reverse.take(10)

        # return json information with usernames, deck price, and most valuable card (array of hashes)
        render json: top_ten

    end

end
