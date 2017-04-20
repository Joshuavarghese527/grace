class SermonsController < ApplicationController
 before_action :set_sermon, only: [:show, :edit, :update]
  before_action :authenticate_user!, except: [:show, :index]

  def index
    @sermon = Sermon.order(:date)
  end

  def show
    @photos = @sermon.photos
  end

  def new
     @sermon = Sermon.new
  end

  def create
    @sermon = current_user.sermons.build(sermon_params)

    if @sermon.save

      if params[:images] 
        params[:images].each do |image|
          @sermon.photos.create(image: image)
        end
      end

      @photos = @sermon.photos
      redirect_to edit_sermon_path(@sermon), notice: "Saved..."
    else
      render :new
    end
  end

  def edit
   if current_user.id == @sermon.user.id
      @photos = @sermon.photos
    else
      redirect_to root_path, notice: "You don't have permission."
    end
  end

  def update
    if @sermon.update(sermon_params)

      if params[:images] 
        params[:images].each do |image|
          @sermon.photos.create(image: image)
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