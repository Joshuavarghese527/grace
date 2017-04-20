class CreateEpisodes < ActiveRecord::Migration[5.0]
    def change
    create_table :episodes do |t|
      t.string :title
      t.text :description
      t.references :users, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end