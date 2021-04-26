Rails.application.routes.draw do
  resources :daily_cards
  resources :rankings
  resources :binders
  resources :cards
  devise_for :users
  post '/boosterpack/' => 'binders#booster_pack'
  post '/dailycard/' => 'binders#daily_card'
  get '/userstatistics/' => 'binders#user_statistics'
  get '/eligibility_check/' => 'daily_cards#eligibility_check'
  get '/cardshow/:card_id', to: redirect('/home')
  get '/bindershow/:binder_id', to: redirect('/usercardindex')
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root to: 'home#index'
end
