const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');
const { ensureAuthenticated } = require('../middlewares/auth');

// Ruta para mostrar todos los tweets y procesar el formulario de creación de tweets
router.route('/')
  .get(async (req, res) => {
    try {
      const tweets = await Tweet.find().populate('user');
      res.render('timeline', { tweets });
    } catch (error) {
      console.error(error);
      res.redirect('/');
    }
  })
  .post(ensureAuthenticated, async (req, res) => {
    try {
      const { content } = req.body;

      // Crear un nuevo tweet utilizando el modelo Tweet
      const newTweet = new Tweet({ content, user: req.user });

      // Guardar el tweet en la base de datos
      await newTweet.save();

      res.redirect('/');
    } catch (error) {
      console.error(error);
      res.redirect('/tweets');
    }
  });


// Ruta para mostrar la página de creación de tweets
router.get('/create', (req, res) => {
  res.render('createTweet');
});

module.exports = router;
