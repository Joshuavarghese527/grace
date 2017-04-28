class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      
      t.string :title
      t.text :description
      t.string :address
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end