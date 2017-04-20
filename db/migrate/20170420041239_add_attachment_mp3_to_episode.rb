class AddAttachmentMp3ToEpisode < ActiveRecord::Migration[5.0]
    def self.up
    change_table :episodes do |t|
      t.attachment :mp3
    end
  end

  def self.down
    remove_attachment :episodes, :mp3
  end
end