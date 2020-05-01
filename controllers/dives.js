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
  let data;

  if (req.params.diveid) {
    console.log("get by dive id");
  }

  let tripName = (req.params.tripid) ? await Trips.getTripName(req.params.tripid) : "";
  let lastDiveNo = await Dives.getLastDiveNo();
  let trips = await Trips.getTripNames();

  data = {
    lastDiveNo: lastDiveNo.rows[0].dive_no,
    nextDiveNo: parseInt(lastDiveNo.rows[0].dive_no) + 1,
    tripName,
    trips: trips.rows
  };
  res.render('diveform', data);
};

const addDive = async (req, res) => {
  let timeIn = new Date(req.body.date + "T" + req.body.time_in);
  let timeOut = new Date(req.body.date + "T" + req.body.time_out);
  let newDive = new Dives({
    trip_id: req.body.trip_id,
    dive_no: req.body.dive_no,
    site: req.body.site,
    time_in: timeIn,
    time_out: timeOut,
    max_depth: req.body.max_depth,
    avg_depth: req.body.avg_depth,
    notes: req.body.notes,
    img_pubid: req.body.img_pubid
  });

  let newDiveId = await newDive.insertDive();

  res.redirect(`/trip/${req.body.trip_id}`);
};

module.exports = {
  listDives,
  showForm,
  addDive
};
