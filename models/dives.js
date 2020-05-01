// model module
// contains db queries and functions that a controller will call
const dbpool = require('../db.js');

module.exports = class Dive {
  constructor (num) {
    this.num = num;
  }

  static async getAllDives() {
    let query =
        'SELECT dives.*, trips.name FROM dives ' +
        'INNER JOIN trips ' +
        'ON (dives.trip_id = trips.id) ' +
        'ORDER BY dives.time_in DESC';
    return await dbpool.query(query);
  }

  static async getDivesByTrip(trip_id) {
    let query =
        'SELECT * FROM dives ' +
        'INNER JOIN trips ' +
        'ON (dives.trip_id = trips.id) ' +
        'WHERE dives.trip_id = $1 ' +
        'ORDER BY dives.time_in';
    let value = [trip_id];

    return await dbpool.query(query, value);
  }

  static async getLastDiveNo() {
    let query =
        'SELECT dive_no FROM dives ' +
        'WHERE id = (SELECT MAX(id) from dives)';

    return await dbpool.query(query);
  };

  static async getDiveById(dive_id) {
    let query =
        'SELECT dives.*, trip.name as tripname FROM dives ' +
        'INNER JOIN trips ' +
        'ON (dives.trip_id = trips.id) ' +
        'WHERE dives.id = $1';
    let value = [dive_id];

    return await dbpool.query(query, value);
  };

};
