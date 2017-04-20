  class EpisodesController < ApplicationController
  before_action :authenticate_user!, except: [:show]
  before_filter :require_permission
  before_action :find_user
  before_action :find_episode, only: [:show, :edit, :update, :destroy]

  def new
    @episode = @user.episodes.new
  end

  def create
    @episode = @user.episodes.new(episode_params)
    if @episode.save
      redirect_to user_episode_path(user, @episode)
    else
      render 'new'
    end
  end

  def show
    @episodes = Episode.where(user_id: @user).order("created_at DESC").limit(6).reject { |e| e.id == @episode.id }
  end

  def edit
  end

  def update
    if @episode.update episode_params
      redirect_to user_episode_path(@user, @episode), notice: "Episode was succesfully updated!"
    else
      render 'edit'
    end
  end

  def destroy
    @episode.destroy
    redirect_to root_path
  end

  private

  def episode_params
    params.require(:episode).permit(:title, :description, :episode_thumbnail, :mp3)
  end

  def find_user
    @user = User.find(params[:user_id])
  end

  def find_episode
    @episode = Episode.find(params[:id])
  end

  def require_permission
    @user = User.find(params[:user_id])
    if current_user != @user
      redirect_to root_path, notice: "Sorry, you're not allowed to view that page"
    end
  end
end