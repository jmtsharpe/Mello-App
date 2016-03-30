class Api::BoardsController < ApplicationController

  def new
  end

  def create
    @board = Board.new(board_params)
    if @board.save
      render :root_url
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
  end

  def index
    @boards = Board.all
    render :index
  end

  def show
    @board = Board.find(params[:id])
    render :show
  end

  def destroy
  end

  private

  def board_params
    params.require(:board).permit( :subject, :user_id )
  end

end
