class Api::CardsController < ApplicationController

  def new
  end

  def create
    @card = Card.new(card_params)
    if @card.save
      render :index
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
  end

  def index
		debugger
    @cards = Card.where(board_id: params[:boardId])
    render :index
  end

  def show
    @card = Card.find(params[:id])
    render :show
  end

  def destroy
  end

  private

  def card_params
    params.require(:card).permit( :subject, :board_id )
  end

end