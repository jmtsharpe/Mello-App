Rails.application.routes.draw do

  root to: 'static_pages#root'

  resources :users

  namespace :api, defaults: {format: :json} do
    resource :session
    resources :boards do
      resources :cards do
      	resources :tasks
      end
    end
  end
end
