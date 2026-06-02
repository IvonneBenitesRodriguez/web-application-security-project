class UsersController < ApplicationController
  def register
    user = User.new(user_params)
    if user.save
      render json: { message: "Usuario registrado exitosamente", user: { id: user.id, full_name: user.full_name, email: user.email }}, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      render json: { message: "Login exitoso", user: { id:user.id, full_name: user.full_name }}, status: :ok
    else 
      render json: { error: "Email o password incorrectos" }, status: :unauthorized
  end
end

private

def user_params
  params.require(:user).permit(:full_name, :email, :age, :password)
  end
end
