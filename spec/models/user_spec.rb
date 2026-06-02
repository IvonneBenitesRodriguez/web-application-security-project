require 'rails_helper'

RSpec.describe User, type: :model do
  describe "presence validations" do
  it 'is invalid without a full name' do
    user = User.new(full_name:'')
    expect(user).not_to be_valid
  end

  it "is invalid without an email" do
    user = User.new(email: "")
    expect(user).not_to be_valid 
  end

  it "is invalid without an age" do
    user = User.new(age: nil)
    expect(user).not_to be_valid
  end

  it "is invalid if password is shorter than 8 characters" do
    user = User.new(password: '123')
    expect(user).not_to be_valid
  end
end

describe "uniqueness validations" do 
  it "is invalid if email already exists" do
    User.create(full_name: "Ivonne", email: "ivonne@test.com", age: 25, password: "password123")
    user = User.new(full_name: "Adele", email: "ivonne@test.com", age:30, password:"password123")
    expect(user).not_to be_valid
  end
end

describe "password security - OWASP A02" do
  it "never stores password in plain test" do
    user = User.create(full_name: "Ivonne", email: "ivonne@test.com", age: 25, password: "password123")
    expect(user.password_digest).not_to eq("password123")
  end
end

describe "weak password policy - OWASP A07" do
  it "rejects password shorter than 8 characters" do
    user = User.new(full_name: "Ivonne", email: "ivonne@test.com", age: 25, password: "123")
    expect(user).not_to be_valid
  end 
end

describe "account enumeration protection - OWASP A07" do
  it "rejects duplicate emails" do
    User.create(full_name: "Ivonne", email: "ivonne@test.com", age: 25, password: "password123" )
    user = User.new(full_name: "Another", email: "ivonne@test.com", age:30, password: "password123")
    expect(user).not_to be_valid
    end 
  end
end