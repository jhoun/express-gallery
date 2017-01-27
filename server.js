const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const db = require('./models');
const Project = db.Project;
const portfolio = require('./routes/portfolio');
const register = require('./routes/register');
const login = require('./routes/login');
const logout = require('./routes/logout');
const passport = require('passport');
const session = require('express-session');
const parseurl = require('parseurl');
const LocalStrategy = require('passport-local').Strategy
const CONFIG = require('./config/config')
const RedisStore = require('connect-redis')(session);
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
}))

app.set('view engine', '.hbs');

app.set('views', 'views')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended:true
}));

const sess = {
  cookie: { maxAge: 6000},
  store: new RedisStore(),
  secret: CONFIG.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}

app.use(session(sess));

app.use(passport.initialize());

app.use(passport.session());

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use(cookieParser());

app.use(flash());

app.use((req, res, next) => {
  next('route');
})

app.use('/portfolio', portfolio);
app.use('/register', register);
app.use('/login', login);
app.use('/logout', logout);

// When you want to get to '/'' path
app.get('/', (req,res) => {
    Project.findAll()
    .then((project)  => {
      res.render('portfolio/index');
    })
})

app.get('/flash', function(req, res){
  req.flash('info', ['Hi there!', 'suck it']);
  res.redirect('/');
});


if(!module.parent){
    app.listen(3000, () => {
    console.log('Server started on port 3000');
    db.sequelize.sync();
  });
}

module.exports = app;