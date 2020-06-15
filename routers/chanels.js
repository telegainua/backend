const express = require('express');
const router = express.Router();
const Chanel = require('../models/Chanel');


router.get('/', async (req, res) => {
   try {
       const chanels = await Chanel.find();
       res.json(chanels);
   } catch(e) {
        res.json({message: err});
    }
});

//Create chanel
router.post('/', async (req, res) => {
    const chanel = new Chanel({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedChanel = await chanel.save();
        res.json(savedChanel);
    } catch (err) {
        res.json({message: err})
    }
});

router.get('/:chanelId', async (req, res) => {
    try {
        const chanel = await Chanel.findById(req.params.chanelId);
        res.json(chanel);
    } catch (err) {
        res.json({message: err})
    }
});

//Delete
router.delete('/:chanelId', async (req, res) => {
    try {
        const removedChanel = await Chanel.remove({_id: req.params.chanelId});
        res.json(removedChanel);
    } catch (err) {
        res.json({message: err});
    }
});

//Update a chanel
router.patch('/:chanelId', async (req, res) => {
    try {
       const updatedChanel = await Chanel.updateOne(
        {_id: req.params.chanelId},
        {$set: { title: req.body.title}}
       );
       res.json(updatedChanel);
    } catch (err) {
        res.json({message: err});
    }
});






module.exports = router;