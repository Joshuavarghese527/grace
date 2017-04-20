class AddSermonToPhotos < ActiveRecord::Migration[5.0]
  def change
    add_reference :photos, :sermon, foreign_key: true
  end
end
