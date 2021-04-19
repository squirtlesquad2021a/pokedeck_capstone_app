class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :binders
  has_many :cards, through: :binders

  validates :username, length: { minimum: 3 }
  validates :username, uniqueness: true
  validates :username, presence: true
end
