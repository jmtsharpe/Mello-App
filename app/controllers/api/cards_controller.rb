class Api::CardsController < ApplicationController

  def new
  end

  def create
		debugger
    @card = Card.new(card_params)
    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
		@card = Card.find(params[:id])

    if @card.update(card_params)
      flash[:success] = "Updated successfully"
      render :show
    else
      flash.now[:errors] = @card.errors.full_messsages
      render :show
    end
  end

  def index
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
    params.require(:card).permit( :subject, :board_id, :position )
  end

end
