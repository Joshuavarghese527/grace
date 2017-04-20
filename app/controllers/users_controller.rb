class UsersController < ApplicationController
  before_action :find_user, only: [:show, :dashboard]
  before_action :find_episode, only: [:show, :dashboard]

  def index
    @users = User.all.order("created_at DESC").paginate(:page => params[:page], :per_page => 12)
  end

  def show
     @user = User.find(params[:id])
    @events = @user.events
    @sermons = @user.sermons
  end

  def dashboard
  end

  private

  def find_episode
    @episodes = Episode.where(user_id: @user).order("created_at DESC").paginate(:page => params[:page], :per_page => 5)
  end

  def find_user
    if params[:id].nil?
      @user = current_user
    else
      @user = User.find(params[:id])
    end
  end
end
  