Rails.application.routes.draw do
  resources :rankings
  resources :binders
  resources :cards
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  post '/boosterpack/:user_id' => 'binders#booster_pack'
  post '/dailycard/:user_id' => 'binders#daily_card'
  get '/deckprice/:user_id' => 'binders#deck_price'
  root to: 'home#index'
end
