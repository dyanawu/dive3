// model module
// contains db queries and returns data to controller
const dbPool = require('../db.js');

module.exports = class Operator {

  constructor (name) {
    this.name = name;
  }

  static async getAll() {
    let query =
        'SELECT * ' +
        'FROM operators ' +
        'ORDER BY name';
    return await dbPool.query(query);
  }

  async getOrCreate() {
    let value = [this.name];
    let selectQuery =
        'SELECT id FROM operators WHERE name = $1';
    let insertQuery =
        'INSERT INTO operators (name) VALUES ($1) RETURNING id';

    let operatorResult;
    try {
      operatorResult = await dbPool.query(selectQuery, value);
      if (operatorResult.rowCount === 0) {
        console.log("didn't get anything, trying insert");
      } else {
        return operatorResult.rows[0].id;
      }
    } catch(error) {
      console.log(error);
    }

    try {
      operatorResult = await dbPool.query(insertQuery, value);
      if (operatorResult.rowCount === 0) {
        console.log("couldn't insert (maybe someone beat you), trying select again");
      } else {
        return operatorResult.rows[0].id;
      }
    } catch(error) {
      console.log(error);
    }

    try {
      operatorResult = await dbPool.query(selectQuery, value);
      if (operatorResult.rowCount === 0) {
        console.log("didn't get anything, death");
      } else {
        return operatorResult.rows[0].id;
      }
    } catch(error) {
      console.log(error);
    }

    return "escaped";
  }
};
