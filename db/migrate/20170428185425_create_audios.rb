class CreateAudios < ActiveRecord::Migration[5.0]
  def change
    create_table :audios do |t|
      t.references :sermon, foreign_key: true

      t.timestamps
    end
  end
end
