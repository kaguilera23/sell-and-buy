const router = require('express').Router();
const { Category, Product } = require('../../models');
const { update } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/',  (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{ model: Product }],
  }).then((data) => {
    res.send(data)
  })  
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne(
    {
      where: {id: req.params.id},
      include: [{ model: Product }]
    }
  ).then((data) => {
    res.send(data);
  });

});

router.post('/', (req, res) => {
    // create a new category
  Category.create(
    {
      id: req.body.id,
      category_name: req.body.category_name
    }
  ).then ((newCategory) => {
    res.send(newCategory)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    }, 
    {
      where: {
        id: req.params.id
      }
    }
  ).then((updatedCategory) => {
    res.json(updatedCategory)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  ).then((deletedCategory) => {
    res.json(deletedCategory)
  })
});

module.exports = router;
