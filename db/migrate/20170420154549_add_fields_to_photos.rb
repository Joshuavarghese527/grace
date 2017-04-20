class AddFieldsToPhotos < ActiveRecord::Migration[5.0]
  def change
    add_reference :photos, :photoable, polymorphic: true
  end
end
