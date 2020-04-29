// controller module
// contains functions that a route will call

const Trip = require('../models/trips');
const Country = require('../models/countries');
const Destination = require('../models/destinations');
const Operator = require('../models/operators');

const list = async (req, res) => {
  let trips = await Trip.getAll();
  res.send(trips.rows);
};

const add = async (req, res) => {
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

module.exports = {
  list,
  add
};
