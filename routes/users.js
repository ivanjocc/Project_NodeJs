const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

// Ruta para mostrar el formulario de registro
router.get('/register', (req, res) => {
  res.render('register');
});

// Ruta para procesar el formulario de registro
router.post('/register', async (req, res) => {
  try {
    console.log(req.body);

    const { username, email, password } = req.body;
    const newUser = new User({ username, email });

    // Utiliza el método register proporcionado por passport-local-mongoose
    await User.register(newUser, password);

    // Autenticar al usuario después del registro
    passport.authenticate('local')(req, res, () => {
      res.redirect('/');
    });
  } catch (error) {
    console.error(error);
    res.redirect('/users/register');
  }
});



// Ruta para mostrar el formulario de inicio de sesión
router.get('/login', (req, res) => {
  res.render('login');
});

// Ruta para procesar el formulario de inicio de sesión
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true,
  })
);

// Ruta para cerrar sesión
router.get('/logout', (req, res) => {
  req.logOut(err => {
    if (err) {
      console.error(err);
      return res.redirect('/');
    }
    res.redirect('/');
  });
});


module.exports = router;
