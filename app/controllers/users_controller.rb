class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    debugger
    @user = User.new(user_params)
    debugger
    if @user.save
      debugger
      flash[:success] = "Created account successfuly! Welcome #{@user.username}!"
      redirect_to root_url
    else
      debugger
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      flash[:success] = "Updated successfully"
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messsages
      render :edit
    end
  end

  private

  def user_params
    debugger
    params.require(:user).permit(:username, :password)
  end
end
