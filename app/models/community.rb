class Community < ApplicationRecord
  belongs_to :user
  has_many :photos,  as: :photoable, dependent: :destroy

  geocoded_by :address
  after_validation :geocode, if: :address_changed?

  validates :title, presence: true
  validates :description, presence: true, length: {maximum: 500}
  validates :address, presence: true
  validates :date, presence: true
  validates :time, presence: true

end
