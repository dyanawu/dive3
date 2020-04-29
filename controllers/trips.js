// controller module
// contains functions that a route will call

const Trip = require('../models/trips');
const Country = require('../models/countries');
const Destination = require('../models/destinations');
const Operator = require('../models/operators');

const listTrips = async (req, res) => {
  let trips = await Trip.getTrips();
  res.locals.trips = trips.rows;
  res.render('triplist');
};

const showForm = async (req, res) => {
  const results = await Promise.all([
    Country.getAll(),
    Destination.getAll(),
    Operator.getAll()
  ]);

  res.locals.countries = results[0].rows;
  res.locals.destinations = results[1].rows;
  res.locals.operators = results[2].rows;

  res.render('tripform');
};

const addTrip = async (req, res) => {
  let tripStart = new Date(req.body.start);
  let country = new Country(req.body.country);
  let countryId = await country.getOrCreate();
  let destination = new Destination(req.body.destination, countryId);
  let destinationId = await destination.getOrCreate();
  let operator = new Operator(req.body.operator);
  let operatorId = await operator.getOrCreate();

  const newTrip = new Trip({
    name: req.body.name,
    start: tripStart,
    operator: operatorId,
    destination: destinationId
  });

  try {
    let newTripId = await newTrip.insertTrip();
    res.redirect(`/trip/${newTripId.rows[0].id}`);
  } catch(err) {
    console.log(err);
    res.redirect('/trip/new');
  }
};

module.exports = {
  listTrips,
  showForm,
  addTrip
};
