class AddAttachmentAudioToPhotos < ActiveRecord::Migration[5.0]
   def self.up
    change_table :photos do |t|
      t.attachment :audio
    end
  end

  def self.down
    remove_attachment :photos, :audio
  end
end
