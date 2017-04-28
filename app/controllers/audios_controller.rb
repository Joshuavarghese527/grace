class AudiosController < ApplicationController

  def create
    @audio = Audio.create(sound: mp3_file)
  end 

  def destroy

    @audio = Audio.find(params[:id])
    event = @audio.sermon

    @audio.destroy
    @audios = Audio.where(sermon_id: sermon.id)

    respond_to :js
  end
end