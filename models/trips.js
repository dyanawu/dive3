// model module
// contains db queries and functions that a controller will call
const dbPool = require('../db.js');

module.exports = class Trip {
  constructor ({name, start, operator, destination}) {
    this.name = name;
    this.start = start;
    this.operator = operator;
    this.destination = destination;
  }

  static async getTrips() {
    let query =
        'SELECT ' +
        'trips.id, trips.name, trips.start, ' +
        'destinations.name AS destination, countries.name AS country, ' +
        'operators.name AS operator ' +
        'FROM trips ' +
        'INNER JOIN destinations ' +
        'ON (trips.destination_id = destinations.id) ' +
        'INNER JOIN operators ' +
        'ON (trips.operator_id = operators.id) ' +
        'INNER JOIN countries ' +
        'ON (destinations.country_id = countries.id) ' +
        'ORDER BY trips.start DESC';
    return await dbPool.query(query);
  }

  static async getTripName(id) {
    let query =
        'SELECT name FROM trips WHERE id = $1';
    let value = [id];

    let result = await dbPool.query(query, value);
    return result.rows[0].name;
  }

  async insertTrip() {
    console.log("adding trip", this);
    let values = [
      this.name,
      this.start,
      this.operator,
      this.destination
    ];
    let query =
        'INSERT INTO trips ' +
        '(name, start, operator_id, destination_id) ' +
        'VALUES ($1, $2, $3, $4) ' +
        'RETURNING id';

    return await dbPool.query(query, values);
  }

};
