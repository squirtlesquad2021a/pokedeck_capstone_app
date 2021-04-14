class BindersController < ApplicationController

  def index
    binders = Binder.all

    binder_with_cards = binders.map do |binder|
      binder_attributes = binder.attributes
      binder_attributes.merge(card_data: binder.card.attributes)
    end
    render json: binder_with_cards
  end



end
