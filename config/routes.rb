Rails.application.routes.draw do
  get 'sermons/index'

  get 'sermons/show'

  get 'sermons/new'

  get 'sermons/create'

  get 'sermons/edit'

  get 'sermons/update'

  devise_for :users
   root  'grace_finals#home'
  get  'im_new'    => 'grace_finals#im_new'
  get  'know_us'    => 'grace_finals#know_us'
  get  'what_we_do'    => 'grace_finals#what_we_do'
  get  'resources' => 'grace_finals#resources'
  get  'contribute'    => 'grace_finals#contribute'
  get  'contact'    => 'grace_finals#contact'

  #resources
  get  'sermon_series'    => 'grace_finals#sermon_series'
  get  'app'    => 'grace_finals#app'
  get  'books'    => 'grace_finals#books'


#faith statement 
  get  'statment_of_faith'    => 'grace_finals#statment_of_faith'

  #sunday
   get  'sunday'    => 'grace_finals#sunday'

   #grace_stories
   get  'grace_stories'    => 'grace_finals#grace_stories'

   #grace_stories
   get  'volunteer'    => 'grace_finals#volunteer'

    #community_group
   get  'community_groups'    => 'grace_finals#community_groups'

   #create
   get  'create'    => 'grace_finals#create'

   #dna_group
   get  'dna'    => 'grace_finals#dna'

   #serve
   get  'serve'    => 'grace_finals#serve'

resources :users, only: [:show]
resources :events 
resources :sermons
resources :photos 
resources :groups



end
