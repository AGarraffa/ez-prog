const express = require('express');
const path = require('path');
const session = require('express-session');
const routes = require('./controllers/api');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const db = require('./config/connection');

const PORT = process.env.PORT || 5000;
const app = express();
const sess = {
    secret: "it's a secret to go alone",
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

