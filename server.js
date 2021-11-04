const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const session = require("express-session");

// import sequelize connection
const db = require("./models/"); // this is the connection to the database (sequelize)

const app = express();
const PORT = process.env.PORT || 3009;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
