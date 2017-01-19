const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const db = require('./models');
const Project = db.Project;
const portfolio = require('./routes/portfolio');

app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
}))

app.set('view engine', '.hbs');

app.set('views', 'views')

app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use((req, res, next) => {
  next('route');
})

app.use('/portfolio', portfolio);

app.get('/', (req,res) => {
    Project.findAll()
    .then((project)  => {
      res.render('index', {project});
    })
})

app.listen(3000, function() {
  console.log('Server started on port 3000');
  db.sequelize.sync();
});

module.exports = app;