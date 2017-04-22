class AddMoreToGroup < ActiveRecord::Migration[5.0]
  def change
    add_reference :photos, :groups, foreign_key: true
  end
end
