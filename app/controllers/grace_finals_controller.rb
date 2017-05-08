class GraceFinalsController < ApplicationController

  def home
     @event = Event.order(:date)
     @sermon = Sermon.order(:date)
  end

  def volunteer
  end

  def create
     @event = Event.order(:date)
     @sermon = Sermon.order(:date)
     @group = Group.order(:date)
  end

  def im_new
  end

  def know_us
  end

  def what_we_do
  end

  def resources
  end

  def contact
  end

  def contribute
  end

  def sermon_series
    @sermon = Sermon.order(:date)
  end

  def app
  end

  def books
  end

  def statement_of_faith
  end

  def sunday
  end

  def community_groups
    @group = Group.order(:date)
    @groups = Group.paginate(:page => params[:date], :per_page => 3)
  end

  def dna
  end

  def serve
  end

  def grace_stories
  end

end
 