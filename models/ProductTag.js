const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {} //this is a class that extends the Model class from sequelize package and we are not using the class keyword here because we are not creating an object of this class but we are creating an object of the Model class  and we are using the class keyword here because we are creating an object of the Model class

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "product",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tag", // this is the table name of the foreign key in the database table that you want to reference
        key: "id", // this is the column name of the foreign key in the database table that you want to reference
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
