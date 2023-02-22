
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll(
    {
      include: [{model: Product}]
    }
  ).then((data) => {
    res.send(data)
  })
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne( {
    where: {id: req.params.id},
    include: [{model: Product}]
  }).then((data) => {
    res.send(data)
  })
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(
    {
      id: req.body.id,
      tag_name: req.body.tag_name
    }
  ).then((newTag) => {
    res.send(newTag)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {id: req.params.id}
    }
  ).then((updatedTag) => {
    res.send(updatedTag)
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(
    {
      where: {id: req.params.id}
    }
  ).then((deletedTag) => {
    res.json(deletedTag)
  })
});

module.exports = router;
