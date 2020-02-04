const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");




//@route GET api/items
//@desc Get all items
//@access Public
router.get("/", (req, res) => {
  Item.find({})
    .sort({date:-1})
    .then(items => res.json(items))
    .catch(err => console.log)
});

//@route POST api/items
//@desc post an items
//@access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  })

  newItem.save().then(item => res.json(item))
});

//@route DELETE api/items/:id
//@desc delete an items
//@access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
      .then(item => item.remove().then(()=>res.json({success: true})))
      .catch(err => res.status(404).json({succes: false}))
});

module.exports = router;
