const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        through: ProductTag,
        as: "products",
      },
    ],
  })
    .then((dbTagData) => {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTagData);
    })
    .catch((err) => {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    attributes: ["id", "tag_name"],
    include: [
      {
        model: Product,
        as: "products",
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        through: ProductTag,
      },
    ],
    where: {
      id: req.params.id,
    },
  })
    .then((dbTagData) => {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTagData);
    })
    .catch((err) => {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((dbTagData) => {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTagData);
    })
    .catch((err) => {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbTagData) => {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTagData);
    })
    .catch((err) => {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTagData) => {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTagData);
    })
    .catch((err) => {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.status(500).json(err);
    });
});

module.exports = router;
