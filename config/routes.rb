Rails.application.routes.draw do
  root to: 'pages#home'
  get 'location', to: "locations#location"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
