const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const portfolio = require('./routes/portfolio');



app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
}))

app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({
  extended:true
}));

app.use((req, res, next) => {
  next('route');
})

app.use('/portfolio', portfolio);

app.listen(3000, function() {
  console.log('Server started on port 3000');
  db.sequelize.sync();
});

module.exports = app;