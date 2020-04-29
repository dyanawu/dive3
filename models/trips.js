// model module
// contains db queries and functions that a controller will call
const dbpool = require('../db.js');

module.exports = class Trip {
  constructor (name, start, destination, country, operator) {
    this.name = name;
    this.start = start;
    this.destination = destination;
    this.country = country;
    this.operator = operator;
  }

  static async getTrips() {
    let query =
        'SELECT trips.id, trips.name, trips.start, destinations.name AS destination, countries.name AS country, operators.name AS operator ' +
        'FROM trips ' +
        'INNER JOIN destinations ' +
        'ON (trips.destination_id = destinations.id) ' +
        'INNER JOIN operators ' +
        'ON (trips.operator_id = operators.id) ' +
        'INNER JOIN countries ' +
        'ON (destinations.country_id = countries.id) ' +
        'ORDER BY trips.start DESC';
    return await dbpool.query(query);
  }

};
