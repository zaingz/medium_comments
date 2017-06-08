class PostsController < ApplicationController
  def index
    @post = Post.first
  end
end
