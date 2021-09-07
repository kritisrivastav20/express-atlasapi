const express = require('express')
const router = express.Router()
const Feed = require('../models/feedmodel')

router.get('/', async(req, res) => {
    try {
        const feeds = await Feed.find();
        res.json(feeds)
    } catch(err) {
        res.send(err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const feed = await Feed.findById(req.params.id);
        feed ? res.json(feed) : res.json('No user found')
    } catch(err) {
        res.send(err)
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const feed = await Feed.findById(req.params.id);
        feed.isFollow = req.body.isFollow;
        const a1 = await feed.save();
        res.json(a1)
    } catch(err) {
        res.send(err)
    }
})

router.delete('/:id', async(req, res) => {
    try {
       const feed = await Feed.findByIdAndDelete(req.params.id);
       if (!feed) res.status(404).send("No item found");
       res.status(200).send("Item deleted successfully");
    } catch(err) {
        res.send(err)
    }
})

router.post('/', async(req,res) => {
      Feed.insertMany(req.body, (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to create new feed.");
    } else {
       res.send(doc)
    }
  });
})

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ error: message });
}

module.exports = router