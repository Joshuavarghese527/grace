class AddAttributesToUser < ActiveRecord::Migration[5.0]
    def change
    add_column :users, :title, :string
    add_column :users, :descrition, :text
    add_column :users, :itunes, :string
    add_column :users, :stitcher, :string
    add_column :users, :podbay, :string
  end
end