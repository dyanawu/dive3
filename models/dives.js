// model module
// contains db queries and functions that a controller will call
const dbPool = require('../db.js');

module.exports = class Dive {
  constructor ({trip_id, dive_no, site, time_in, time_out,
                max_depth, avg_depth, notes, img_pubid}) {
    this.trip_id = trip_id;
    this.dive_no = dive_no;
    this.site = site;
    this.time_in = time_in;
    this.time_out = time_out;
    this.max_depth = max_depth;
    this.avg_depth = avg_depth;
    this.notes = notes;
    this.img_pubid = img_pubid;
  }

  static async getAllDives() {
    let query =
        'SELECT dives.*, trips.name FROM dives ' +
        'INNER JOIN trips ' +
        'ON (dives.trip_id = trips.id) ' +
        'ORDER BY dives.time_in DESC';
    return await dbPool.query(query);
  }

  static async getDivesByTrip(trip_id) {
    let query =
        'SELECT * FROM dives ' +
        'INNER JOIN trips ' +
        'ON (dives.trip_id = trips.id) ' +
        'WHERE dives.trip_id = $1 ' +
        'ORDER BY dives.time_in';
    let value = [trip_id];

    return await dbPool.query(query, value);
  }

  static async getLastDiveNo() {
    let query =
        'SELECT dive_no FROM dives ' +
        'WHERE id = (SELECT MAX(id) from dives)';

    return await dbPool.query(query);
  };

  static async getDiveById(dive_id) {
    let query =
        'SELECT dives.*, trip.name as tripname FROM dives ' +
        'INNER JOIN trips ' +
        'ON (dives.trip_id = trips.id) ' +
        'WHERE dives.id = $1';
    let value = [dive_id];

    return await dbPool.query(query, value);
  };

  async insertDive() {
    let query =
        'INSERT INTO dives ' +
        '(trip_id, dive_no, site, ' +
        'time_in, time_out, max_depth, avg_depth, notes, img_pubid) ' +
        'VALUES ' +
        '($1, $2, $3, $4, $5, $6, $7, $8, $9) ' +
        'RETURNING id';
    let values = [
      this.trip_id,
      this.dive_no,
      this.site,
      this.time_in,
      this.time_out,
      this.max_depth,
      this.avg_depth,
      this.notes,
      this.img_pubid
    ];

    return await dbPool.query(query, values);
  }

};
