   class CommunitiesController < ApplicationController
  before_action :set_community, only: [:show, :edit, :update]
  before_action :authenticate_user!, except: [:show, :index]

  def index
    @community = Community.order(:date)
  end

  def show
    @photos = @community.photos
  end

  def new
     @community = Community.new
  end

  def create
    @community = current_user.communitiess.build(community_params)

    if @community.save

      if params[:images] 
        params[:images].each do |image|
          @community.photos.create(image: image)
        end
      end

      @photos = @community.photos
      redirect_to edit_community_path(@community), notice: "Saved..."
    else
      render :new
    end
  end

  def edit
   if current_user.id == @community.user.id
      @photos = @community.photos
    else
      redirect_to root_path, notice: "You don't have permission."
    end
  end

  def update
    if @community.update(community_params)

      if params[:images] 
        params[:images].each do |image|
          @community.photos.create(image: image)
        end
      end

      redirect_to edit_community_path(@community), notice: "Updated..."
    else
      render :edit
    end
  end

   def destroy
    @community = Community.find(params[:id])
    @community.destroy
 
    redirect_to communities_path
  end

  private

  def set_commnunity
      @community = Community.find(params[:id])
  end

  def community_params
      params.require(:community).permit(:title, :description, :address, :date, :time)
  end

end
