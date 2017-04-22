class AddExtraFieldToGroup < ActiveRecord::Migration[5.0]
  def change
    add_column :groups, :date, :date
    add_column :groups, :time, :time
  end
end