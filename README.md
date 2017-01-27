#Portfolio#

--

Express, Sequelize, HTML5, stored on PostgreSQL

![alt tag](http://i.imgur.com/P229Sa7.png)

--

Create a multi-user Gallery.
Any user should be able to access these routes:

- `GET /` to view a list of gallery photos
- `GET /gallery/:id` to see a single gallery photo
  - each gallery photo should include a link to delete this gallery photo
  - each gallery photo should include a link to edit this gallery photo
- `GET /gallery/new` to see a "new photo" form
  - the form fields are:
    - `author` : Text
    - `link` : Text (the image url)
    - `description` : TextArea
- `POST /gallery` to create a new gallery photo i
- `GET /gallery/:id/edit` to see a form to *edit* a gallery photo identified by the `:id` param
  - the form fields are:
    - `author` : Text
    - `link` : Text (the image url)
    - `description` : TextArea
- `PUT /gallery/:id` updates a single gallery photo identified by the `:id` param
- `DELETE /gallery/:id` to delete a single gallery photo identified by the `:id` param

---

Setting up the project:

1. Clone with SSH to your local machine
1. create a database in your psql
1. Create config/config.json file
  - copy template from config-example.json to your new config.json file
  - Fill in appropriate inputs
1. run sequelize db:migrate
1. run sequelize db:seed:all
1. run gulp

---

