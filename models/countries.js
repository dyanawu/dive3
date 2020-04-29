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
  }

  async getOrCreate() {
    let value = [this.name];
    let selectQuery =
        'SELECT id FROM countries WHERE name = $1';
    let insertQuery =
        'INSERT INTO countries (name) VALUES ($1) RETURNING id';

    let countryResult;
    try {
      countryResult = await dbPool.query(selectQuery, value);
      if (countryResult.rowCount === 0) {
        console.log("didn't get anything, trying insert");
      } else {
        return countryResult.rows[0].id;
      }
    } catch(error) {
      console.log(error);
    }

    try {
      countryResult = await dbPool.query(insertQuery, value);
      if (countryResult.rowCount === 0) {
        console.log("couldn't insert (maybe someone beat you), trying select again");
      } else {
        return countryResult.rows[0].id;
      }
    } catch(error) {
      console.log(error);
    }

    try {
      countryResult = await dbPool.query(selectQuery, value);
      if (countryResult.rowCount === 0) {
        console.log("didn't get anything, death");
      } else {
        return countryResult.rows[0].id;
      }
    } catch(error) {
      console.log(error);
    }

    return "escaped";
  }
};
