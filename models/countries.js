// model module
// contains db queries and returns data to controller
const dbPool = require('../db.js');

module.exports = class Country {

  constructor (name) {
    this.name = name;
  }

  static async getAll() {
    let query =
        'SELECT * ' +
        'FROM countries ' +
        'ORDER BY name';
    return await dbPool.query(query);
  };
};
