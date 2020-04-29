// model module
// contains db queries and returns data to controller
const dbPool = require('../db.js');

module.exports = class Destination {

  constructor (name, country) {
    this.name = name;
    this.country = country;
  }

  static async getAll() {
    let query =
        'SELECT * ' +
        'FROM destinations ' +
        'ORDER BY name';
    return await dbPool.query(query);
  };
};
