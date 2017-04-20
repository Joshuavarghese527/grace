class AddMoreToSermon < ActiveRecord::Migration[5.0]
  def change
    add_reference :sermons, :user, foreign_key: true
  end
end
