class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :binders
  has_many :cards, through: :binders

  PASSWORD_FORMAT = /\A
  (?=.*\d)           # Must contain a digit
  (?=.*[a-z])        # Must contain a lower case character
  (?=.*[A-Z])        # Must contain an upper case character
  (?=.*[[:^alnum:]]) # Must contain a symbol
/x
  


  validates :username, length: { minimum: 6, maximum: 15 }
  validates :username, uniqueness: true
  validates :username, presence: true

  validates :password, length: { in: 6..20 }
  validates :password, format: {with: PASSWORD_FORMAT}
  validates :password, confirmation: true
end
