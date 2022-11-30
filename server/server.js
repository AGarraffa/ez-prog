const express = require('express');
const path = require('path');
const session = require('express-session');
const routes = require('./routes');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const sess = {
    secret: "it's a secret to everybody",
    cookies: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))
})

app.get('/express_backend', (req, res) => { 
    res.send({express: 'Your express backend is connected to React'});
});

