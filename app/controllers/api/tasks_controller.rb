class Api::TasksController < ApplicationController
	def new
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render :index
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
  end

  def index
    @tasks = Task.all
    render :index
  end

  def show
    @task = Task.find(params[:id])
    render :show
  end

  def destroy
  end

  private

  def task_params
    params.require(:task).permit( :subject, :card_id )
  end
end
