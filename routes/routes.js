const express = require('express');
const router = express.Router();

// require the controllers which have  a functon for each route
const Trips = require('../controllers/trips');
const Dives = require('../controllers/dives');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/trips', Trips.listTrips);

router.get('/trip/new', Trips.showForm);

router.post('/trip/new', Trips.addTrip);

router.get('/trip/:tripid', Trips.listTripDives);

router.get('/trip/:tripid/dive/new', Dives.showForm);

router.post('/trip/:tripid/dive/new', Dives.addDive);

//router.get('/trip/:id/edit', Trips.showForm);

router.get('/dives', Dives.listDives);

router.get('/dive/new', Dives.showForm);

router.post('/dive/new', Dives.addDive);

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
