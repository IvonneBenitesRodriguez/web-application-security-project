require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "POST /users/register" do
    it "crea un usuario exitosamente" do
      post "/users/register", params:{
        user: {
        full_name: "Ivonne Benites",
        email: "ivonne@test.com",
        age: 25,
        password: "password123"
        }
      }
      expect(response).to have_http_status(:created)
      expect(JSON.parse(response.body)["message"]).to eq("Usuario registrado exitosamente")
    end
    
    it "falla si el email ya existe" do
      User.create(full_name:"Ivonne", email: "ivonne@test.com", age: 25, password: "password123")
      post "/users/register", params: {
        user: {
          full_name: "Adele",
          email: "ivonne@test.com",
          age: 30,
          password: "password123"
        }
      }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe "POST /users/login" do
    it "login exitoso con credenciales correctas"  do
      User.create(full_name: "Ivonne Benites", email: "ivonne@test.com" , age:25, password: "password123" )
      post "/users/login", params: { email: "ivonne@test.com", password: "password123" }
      expect(response).to have_http_status(:ok)
      expect( JSON.parse(response.body)["message"]).to eq("Login exitoso")
  end

  it "falla con password incorrecto" do
    User.create(full_name: "Ivonne Benites", email: "ivonne@test.com", age: 25, password: "password123")
    post "/users/login", params: { email: "ivonne@test.com", password: "wrongpassword" }
    expect(response).to have_http_status(:unauthorized)
    end
  end
end 

  