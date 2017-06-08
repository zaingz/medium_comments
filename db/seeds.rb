# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
5.times do
  User.create(name: Faker::Name.name , email: Faker::Internet.email, avatar: Faker::Avatar.image)
end



Post.create(title: Faker::StarWars.quote, cover_image: Faker::LoremPixel.image("1200x720"), user: User.first, content:Faker::Hipster.paragraphs(20, true))
