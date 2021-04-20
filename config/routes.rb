Rails.application.routes.draw do
  resources :daily_cards
  resources :rankings
  resources :binders
  resources :cards
  devise_for :users
  post '/boosterpack/:user_id' => 'binders#booster_pack'
  post '/dailycard/:user_id' => 'binders#daily_card'
  get '/deckprice/:user_id' => 'binders#deck_price'
  get '/eligibility_check/:user_id' => 'daily_cards#eligibility_check'
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root to: 'home#index'
end
