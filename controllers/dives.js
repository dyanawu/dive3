// controller module
// contains functions that a route will call

const Dives = require('../models/dives');
const Trips = require('../models/trips');

const listDives = async (req, res) => {
  let results = await Dives.getAllDives();
  res.locals.dives = results.rows;
  res.render('divelist');
};

const showForm = async (req, res) => {
  if (req.params.diveid) {
    console.log("get by dive id");
  } else if (req.params.tripid) {
    console.log("adding dive to trip");
  }

  let lastDiveNo = await Dives.getLastDiveNo();
  let data = {
  };
  res.render('diveform', data);
};

module.exports = {
  listDives,
  showForm
};
