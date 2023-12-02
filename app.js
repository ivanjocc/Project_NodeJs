const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const tweetRoutes = require('./routes/tweets');
const userRoutes = require('./routes/users');
const indexRoutes = require('./routes/index');

const app = express();

// Configuración de Mongoose y conexión a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/twitter');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
	console.log('MongoDB funciona al pelo');
});

// Configuración de Express
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Configuración de Passport para autenticación
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware para pasar el usuario autenticado a todas las vistas
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// Rutas
app.use('/', indexRoutes);
app.use('/tweets', tweetRoutes);
app.use('/users', userRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
