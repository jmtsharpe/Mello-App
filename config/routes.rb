Rails.application.routes.draw do

  root to: 'static_pages#root'

  resources :users
  resource :session

  namespace :api, defaults: {format: :json} do
    resources :boards do
      resources :cards do
      	resources :tasks
      end
    end
  end
end
