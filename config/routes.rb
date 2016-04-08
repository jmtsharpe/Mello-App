Rails.application.routes.draw do

  root to: 'static_pages#root'


  namespace :api, defaults: {format: :json} do

		patch 'boards/:id/cards', :to => 'cards#update_order'

		resources :users
    resource :session
    resources :boards do
      resources :cards do
      	resources :tasks
      end
    end
  end
end
