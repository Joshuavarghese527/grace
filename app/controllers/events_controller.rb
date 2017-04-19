class EventsController < ApplicationController
  layout 'grace_final'
  before_action :set_event, only: [:show, :edit, :update]
  before_action :authenticate_user!, except: [:show, :index]

  def index
    @event = Event.order(:date)
  end

  def show
    @photos = @event.photos
  end

  def new
     @event = Event.new
  end

  def create
    @event = current_user.events.build(event_params)

    if @event.save

      if params[:images] 
        params[:images].each do |image|
          @event.photos.create(image: image)
        end
      end

      @photos = @event.photos
      redirect_to edit_event_path(@event), notice: "Saved..."
    else
      render :new
    end
  end

  def edit
   if current_user.id == @event.user.id
      @photos = @event.photos
    else
      redirect_to root_path, notice: "You don't have permission."
    end
  end

  def update
    if @event.update(event_params)

      if params[:images] 
        params[:images].each do |image|
          @event.photos.create(image: image)
        end
      end

      redirect_to edit_event_path(@event), notice: "Updated..."
    else
      render :edit
    end
  end

    def destroy
    @event.destroy
    respond_to do |format|
      format.html { redirect_to events_url, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_event
      @event = Event.find(params[:id])
  end

  def event_params
      params.require(:event).permit(:title, :description, :address, :date, :time)
  end

end
