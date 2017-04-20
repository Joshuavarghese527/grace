class PhotosController < ApplicationController

  def destroy
    @photo = Photo.find(params[:photoable_id])
    event = @photo.event

    @photo.destroy
    @photos = Photo.where(event_id: event.id)

    respond_to :js
  end
end