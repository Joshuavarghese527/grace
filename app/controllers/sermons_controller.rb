class SermonsController < ApplicationController
 before_action :set_sermon, only: [:show, :edit, :update]
  before_action :authenticate_user!, except: [:show, :index]

  def index
    @sermon = Sermon.order(:date)
  end

  def show
    @audios = @sermon.audios
  end

  def new
     @sermon = Sermon.new
  end

  def create
    @sermon = current_user.sermons.build(sermon_params)

    if @sermon.save

      if params[:sounds] 
        params[:sounds].each do |sound|
          @sermon.audios.create(sound: sound)
        end
      end

      @audios = @sermon.audios
      redirect_to edit_sermon_path(@sermon), notice: "Saved..."
    else
      render :new
    end
  end

  def edit
   if current_user.id == @sermon.user.id
      @audios = @sermon.audios
    else
      redirect_to root_path, notice: "You don't have permission."
    end
  end

  def update
    if @sermon.update(sermon_params)

      if params[:sounds] 
        params[:sounds].each do |image|
          @sermon.photos.create(sound: sound)
        end
      end

      redirect_to edit_sermon_path(@sermon), notice: "Updated..."
    else
      render :edit
    end
  end

   def destroy
    @sermon = Sermon.find(params[:id])
    @sermon.destroy
 
    redirect_to sermons_path
  end

  private

  def set_sermon
      @sermon = Sermon.find(params[:id])
  end

  def sermon_params
      params.require(:sermon).permit(:title, :summary, :date, :time)
  end

end