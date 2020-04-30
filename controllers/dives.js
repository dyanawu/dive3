// controller module
// contains functions that a route will call

const Dives = require('../models/dives');
const Trips = require('../models/trips');

const listDives = async (req, res) => {
  let results = await Dives.getAllDives();
  res.locals.dives = results.rows;
  res.render('divelist');
};

const listDivesByTrip = async (req, res) => {
  let tripName = await Trips.getTripName(req.params.id);
  let results = await Dives.getDivesByTrip(req.params.id);
  res.locals.dives = results.rows;
  res.locals.tripname = tripName;
  res.render('tripdivelist');
};

const add = async (req, res) => {
  res.send(req.body);
};

module.exports = {
  listDives,
  listDivesByTrip,
  add
};
