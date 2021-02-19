// build your `/api/tasks` router here
const express = require('express');

const Tasks = require('./model');

const router = express.Router();

router.get('/', (req,res) => {
    Tasks.find()
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
});

router.post('/', (req,res) => {
    const taskData = req.body

    Tasks.add(taskData)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
});

module.exports = router;