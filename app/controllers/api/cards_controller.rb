class Api::CardsController < ApplicationController

	def new
	end

	def create
		@card = Card.new(card_params)
		if @card.save
			render :show
		else
			render json: @card.errors.full_messages, status: 422
		end
	end

	def edit
	end

	def update_order
		@moved_card = Card.find(params[:card][:id])

		@new_pos = params[:newPos]



		unless @moved_card.position == @new_pos.to_i
			cards = Card.where(board_id: params[:card][:boardId])
			cards.each do |card|

				if card.position > @new_pos.to_i && card.position < @moved_card.position
					card.update({position: (card.position + 1)})

				elsif card.position == @new_pos.to_i && card.position < @moved_card.position
					card.update({position: (card.position + 1)})

				elsif card.position == @new_pos.to_i && card.position > @moved_card.position
					card.update({position: (card.position - 1)})

				elsif card.position < @new_pos.to_i && card.position > @moved_card.position
					card.update({position: (card.position - 1)})

				end
			end
		end

		@moved_card.update({position: @new_pos.to_i})

		@cards = Card.where(board_id: params[:card][:boardId])
		render :index

	end

	def update
	@card = Card.find(params[:id])

		if @card.update(card_params)
			flash[:success] = "Updated successfully"
			render :show
		else
			flash.now[:errors] = @card.errors.full_messsages
			render :index
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
