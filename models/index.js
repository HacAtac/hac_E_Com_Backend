// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category); // this is the equivalent of a join table in SQL (one-to-many)
// Categories have many Products
Category.hasMany(Product); // this is the equivalent of a join table in SQL (many-to-many)
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag }); // this is the equivalent of a join table in SQL (many-to-many)
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag }); // this is the equivalent of a join table in SQL (many-to-many)  // this is the equivalent of a join table in SQL (many-to-many)
module.exports = {
  // export all models to be used in the app (index.js)
  Product,
  Category,
  Tag,
  ProductTag,
};
