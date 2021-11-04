const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // number (int) type of data in the column (id) in the table (categories) in the database
      allowNull: false, // not null in the database (categories) in the table (categories) in the database (categories)
      primaryKey: true, //  primary key in the database (categories) in the table (categories) in the database (categories)
      autoIncrement: true, // auto increment in the database (categories) in the table (categories) in the database (categories)
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
