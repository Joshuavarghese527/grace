class AddCommunityToPhoto < ActiveRecord::Migration[5.0]
 def change
    add_reference :photos, :communities, foreign_key: true
  end
end
