class Binder < ApplicationRecord
    belongs_to :user
    belongs_to :card

    validates :quantity, presence: true
    validates_inclusion_of :favorite, in: [true, false]
end
