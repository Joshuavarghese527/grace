Rails.application.routes.draw do
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

end
