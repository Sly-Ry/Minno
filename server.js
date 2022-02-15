const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// Sequelize ORM
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'unauthorized credentials',
    cookie: {},
    resave: false,
    saveUtilization: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({});

// Handlebars.js template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlbars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware function that can take all of the contents of a folder and serve them as static assets
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'))

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });