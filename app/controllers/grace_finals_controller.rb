class GraceFinalsController < ApplicationController

  def home
     @event = Event.order(:date)
     @sermon = Sermon.order(:date)
  end

  def volunteer
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

  def statment_of_faith
  end

  def sunday
  end

  def grace_stories
  end

end
 