// controller module
// contains functions that a route will call

const Dives = require('../models/dives');

const listDives = async (req, res) => {
  let results = await Dives.getAllDives();
  res.send(results.rows);
};

const listDivesByTrip = async (req, res) => {
  let results = await Dives.getDivesByTrip(req.params.id);
  res.locals.dives = results.rows;
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
