require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validates username" do
    it "is present" do
      user1 = User.create(email:"email@email.com",password:"password")
      expect(user1.errors[:username]).to_not be_empty
    end
    it "is unique" do
      user1 = User.create(email:"email@email.com",password:"password",username:"user1")
      user2 = User.create(email:"email@email.com",password:"password",username:"user1")
      expect(user2.errors[:username]).to_not be_empty
    end
    it "is 6 characters long" do
      user1 = User.create(email:"email@email.com",password:"password",username:"dude")
      expect(user1.errors[:username]).to_not be_empty
    end
    it "no more than 15 characters long" do
      user1 = User.create(email:"email@email.com",password:"P@ssw0rd",username:"pokemonnerd2021!!!")
      expect(user1.errors[:username]).to_not be_empty
    end
    it "is valid with valid username" do
      user1 = User.create(email:"email@email.com",password:"P@ssw0rd",username:"user12")
      expect(user1).to be_valid
    end
  end
end

RSpec.describe User, type: :model do
  describe "validates password" do
    it "must contain an upper case letter" do
      user1 = User.create(email:"email@email.com")
      user1.username = 'pokemaster'
      user1.password = 'p@ssw0rd'
      expect(user1).not_to be_valid
    end
    it "must contain an upper case letter" do
      user1 = User.create(email:"email@email.com")
      user1.username = 'pokemaster'
      user1.password = 'P@ssw0rd'
      expect(user1).to be_valid
    end
    it "must contain a number" do
      user1 = User.create(email:"email@email.com")
      user1.username = 'pokemaster'
      user1.password = 'P@ssword'
      expect(user1).not_to be_valid
    end
    it "must contain a number" do
      user1 = User.create(email:"email@email.com")
      user1.username = 'pokemaster'
      user1.password = 'P@ssw0rd'
      expect(user1).to be_valid
    end
    it "must contain a special character" do
      user1 = User.create(email:"email@email.com")
      user1.username = 'pokemaster'
      user1.password = 'Passw0rd'
      expect(user1).not_to be_valid
    end
    it "must contain a special character" do
      user1 = User.create(email:"email@email.com")
      user1.username = 'pokemaster'
      user1.password = 'P@ssw0rd'
      expect(user1).to be_valid
    end
    it "must contain a lower case letter" do
      user1 = User.create(email:"email@email.com")
      user1.username = 'pokemaster'
      user1.password = 'P@SSW0RD'
      expect(user1).not_to be_valid
    end
    it "must contain a lower case letter" do
      user1 = User.create(email:"email@email.com")
      user1.username = 'pokemaster'
      user1.password = 'P@ssw0rd'
      expect(user1).to be_valid
    end
  end
end
