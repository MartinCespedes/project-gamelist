const Sequelize = require("sequelize");
const { DB_USER, DB_NAME, DB_PASSWORD, JAWSDB_URL } = require("./index");

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });

module.exports = sequelize;
