class GroupsController < ApplicationController
  before_action :set_group, only: [:show, :edit, :update]
  before_action :authenticate_user!, except: [:show, :index]

  def index
    @group = Group.order(:date)
  end

  def show
    @photos = @group.photos
  end

  def new
     @group = Group.new
  end

  def create
    @group = current_user.groups.build(group_params)

    if @group.save

      if params[:images] 
        params[:images].each do |image|
          @group.photos.create(image: image)
        end
      end

      @photos = @group.photos
      redirect_to edit_group_path(@group), notice: "Saved..."
    else
      render :new
    end
  end

  def edit
   if current_user.id == @group.user.id
      @photos = @group.photos
    else
      redirect_to root_path, notice: "You don't have permission."
    end
  end

  def update
    if @group.update(group_params)

      if params[:images] 
        params[:images].each do |image|
          @group.photos.create(image: image)
        end
      end

      redirect_to edit_group_path(@group), notice: "Updated..."
    else
      render :edit
    end
  end

   def destroy
    @group = Group.find(params[:id])
    @group.destroy
 
    redirect_to groups_path
  end

  private

  def set_group
      @group = Group.find(params[:id])
  end

  def group_params
      params.require(:group).permit(:title, :description, :address, :date, :time)
  end
end

