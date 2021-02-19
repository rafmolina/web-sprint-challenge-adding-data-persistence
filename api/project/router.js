// build your `/api/projects` router here
const express = require('express');

const Projects = require('./model');

const router = express.Router();

router.get('/', (req,res) => {
    Projects.find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
});

router.post('/', (req,res) => {
    const projectData = req.body

    Projects.add(projectData)
      .then(project => {
          res.status(201).json(project)
      })
      .catch(err => {
          res.status(500).json({message: err.message})
      })
})



module.exports = router;