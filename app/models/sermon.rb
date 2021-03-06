class Sermon < ApplicationRecord
  belongs_to :user
  has_many :photos, as: :photoable, dependent: :destroy
  has_many :audios, dependent: :destroy

  validates :title, presence: :true
  validates :summary, presence: :true, length: {maximum: 500}
end
 