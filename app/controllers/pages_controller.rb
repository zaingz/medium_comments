class PagesController < ApplicationController
  def index
    @user = {name: 'Jhones index', type: 'admin'}
  end

  def api
    render json: {name: 'Jhones', type: 'admin'}
  end
end
