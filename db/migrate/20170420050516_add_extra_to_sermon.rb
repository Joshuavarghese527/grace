class AddExtraToSermon < ActiveRecord::Migration[5.0]
   def change
    add_column :sermons, :date, :date
    add_column :sermons, :time, :time
    end
  end
