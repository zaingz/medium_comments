class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :update
  def index
    @post = Post.first
  end

  def update
    Post.first.update(content: params[:content])
  end
end
