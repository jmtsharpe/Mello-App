class Api::BoardsController < ApplicationController

	def new
	end

	def creaste
	@board = Board.new(board_params)
	if @board.save
		render :sshow
	else
		render json: @board.errors.full_messages, status: 422
	end
	end

	def edit
	end

	def update
		@board = Board.find(params[:id])
	if @board.update(board_params)
		flash[:success] = "Updated successfully"
		render :show
	else
		flash.now[:errors] = @board.errors.full_messsages
		render :show
	end
	end

	def index
		if params[:userId]
		@boards = Board.where(user_id: params[:userId])
		else
			@boards = Board.all
		end
	render :index
	end

	def show
		@board = Board.find(params[:id])
	end

	def destroy
	end

	private

	def board_params
		params.require(:board).permit( :subject, :user_id )
	end

end
