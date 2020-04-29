// model module
// contains db queries and returns data to controller
const dbPool = require('../db.js');

module.exports = class Destination {

  constructor (name, country_id) {
    this.name = name;
    this.country_id = country_id;
  }

  static async getAll() {
    let query =
        'SELECT * ' +
        'FROM destinations ' +
        'ORDER BY name';
    return await dbPool.query(query);
  }

  async getOrCreate() {
    let value = [this.name];
    let values = [this.name, this.country_id];
    let selectQuery =
        'SELECT id FROM destinations WHERE name = $1';
    let insertQuery =
        'INSERT INTO destinations (name, country_id) VALUES ($1, $2) RETURNING id';

    let destinationResult;
    try {
      destinationResult = await dbPool.query(selectQuery, value);
      if (destinationResult.rowCount === 0) {
        console.log("didn't get anything, trying insert");
      } else {
        return destinationResult.rows[0].id;
      }
    } catch(error) {
      console.log(error);
    }

    try {
      destinationResult = await dbPool.query(insertQuery, values);
      if (destinationResult.rowCount === 0) {
        console.log("couldn't insert (maybe someone beat you), trying select again");
      } else {
        return destinationResult.rows[0].id;
      }
    } catch(error) {
      console.log(error);
    }

    try {
      destinationResult = await dbPool.query(selectQuery, value);
      if (destinationResult.rowCount === 0) {
        console.log("didn't get anything, death");
      } else {
        return destinationResult.rows[0].id;
      }
    } catch(error) {
      console.log(error);
    }

    return "escaped";
  }
};
