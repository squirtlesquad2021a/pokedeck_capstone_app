class Card < ApplicationRecord
    has_many :binders
    has_many :users, through: :binders
end
