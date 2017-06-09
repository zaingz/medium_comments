class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :update
  def index
    if cookies[:post]
      @post = YAML::load cookies[:post]
    else
      @post = Post.first
      cookies[:post] = YAML::dump @post
    end
  end


  def update
    #Post.first.update(content: params[:content])
    cookies[:post] = YAML::dump Post.first
  end
end
