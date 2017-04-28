class AddAttachmentSoundToAudios < ActiveRecord::Migration
  def self.up
    change_table :audios do |t|
      t.attachment :sound
    end
  end

  def self.down
    remove_attachment :audios, :sound
  end
end
