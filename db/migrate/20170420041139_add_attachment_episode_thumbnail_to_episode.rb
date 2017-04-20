class AddAttachmentEpisodeThumbnailToEpisode < ActiveRecord::Migration[5.0]
    def self.up
    change_table :episodes do |t|
      t.attachment :episode_thumbnail
    end
  end

  def self.down
    remove_attachment :episodes, :episode_thumbnail
  end
end