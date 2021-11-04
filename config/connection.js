require("dotenv").config();

const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL // this is the connection string to the database on heroku (which is the database on my local machine)
  ? new Sequelize(process.env.JAWSDB_URL) //  if the connection string is on heroku, use that one
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      // if the connection string is on my local machine, use that one
      host: "localhost", //process.env.DB_HOST, //"localhost",
      dialect: "mysql", // this is the default port for mysql   //process.env.DB_DIALECT,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
