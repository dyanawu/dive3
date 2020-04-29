const express = require('express');
const router = express.Router();

// require the controllers which have  a functon for each route
const Trips = require('../controllers/trips');

router.get('/', (req, res) => {
  res.render('content');
});

router.get('/trips', Trips.list);

router.get('/trip/new', Trips.showForm);

router.post('/trip/new', Trips.add);

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
