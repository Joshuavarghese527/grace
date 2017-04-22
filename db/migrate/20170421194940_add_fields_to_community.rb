class AddFieldsToCommunity < ActiveRecord::Migration[5.0]
  def change
    add_column :communities, :date, :date
    add_column :communities, :time, :time
  end
end
