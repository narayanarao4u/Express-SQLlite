const express = require('express');
const router = express.Router();
const students = require('../db/students');

router.get('/', async(req, res) => {
    const result = await students.getAll();    
    res.status(200).json(result);
});

router.post('/', async(req, res) => {
    const result = await students.insert(req.body);    
    res.status(201).json(result);
}); 

router.put('/', async(req, res) => {
    const result = await students.update(req.body.id, req.body);
    res.status(200).json(result);
}); 


router.get('/:id', async(req, res) => {
    const result = await students.getbyId(req.params.id);    
    res.status(200).json(result);
});

module.exports = router