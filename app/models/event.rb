class Event < ApplicationRecord
  has_many :photos
  has_many :reservations

  validates :title, presence: true
  validates :description, presence: true, length: {maximum: 500}
  validates :address, presence: true
  validates :date, presence: true
  validates :time, presence: true


end
