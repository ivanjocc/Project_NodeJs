const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');

// Ruta principal para mostrar todos los tweets
router.get('/', async (req, res) => {
  try {
    const tweets = await Tweet.find().populate('user');
    res.render('index', { tweets, user: req.user });
  } catch (error) {
    console.error(error);
    res.redirect('/');
  }
});

module.exports = router;
