class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :full_name, presence: true
    validates :age, presence: true
    validates :password, length: { minimum: 8 }
end
