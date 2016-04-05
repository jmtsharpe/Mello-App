Rails.application.routes.draw do

  root to: 'static_pages#root'


  namespace :api, defaults: {format: :json} do
		resources :users
    resource :session
    resources :boards do
      resources :cards do
      	resources :tasks
      end
    end
  end
end
