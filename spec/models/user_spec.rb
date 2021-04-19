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
    it "is 3 characters long" do
      user1 = User.create(email:"email@email.com",password:"password",username:"us")
      expect(user1.errors[:username]).to_not be_empty
    end
    it "is valid with valid username" do
      user1 = User.create(email:"email@email.com",password:"password",username:"user1")
      expect(user1).to be_valid
    end
  end
end
