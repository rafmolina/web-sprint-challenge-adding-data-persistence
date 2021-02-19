// build your `/api/resources` router here
const express = require('express');

const Resources = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.find()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

router.post('/', (req, res) => {
    const resourceData = req.body

    Resources.add(resourceData)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

module.exports = router;