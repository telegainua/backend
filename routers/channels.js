const express = require('express');
const router = express.Router();
const Channel = require('../models/Channel');


router.get('/', async (req, res) => {
   try {
       const channels = await Channel.find();
       res.json(channels);
   } catch(e) {
        res.json({message: err});
    }
});

//Create channel
router.post('/', async (req, res) => {
    const channel = new Channel({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedChannel = await channel.save();
        res.json(savedChannel);
    } catch (err) {
        res.json({message: err})
    }
});

router.get('/:channelId', async (req, res) => {
    try {
        const channel = await Channel.findById(req.params.channelId);
        res.json(channel);
    } catch (err) {
        res.json({message: err})
    }
});

//Delete
router.delete('/:channelId', async (req, res) => {
    try {
        const removedChannel = await Channel.remove({_id: req.params.channelId});
        res.json(removedChannel);
    } catch (err) {
        res.json({message: err});
    }
});

//Update a channel
router.patch('/:channelId', async (req, res) => {
    try {
       const updatedChannel = await Channel.updateOne(
        {_id: req.params.channelId},
        {$set: { title: req.body.title}}
       );
       res.json(updatedChannel);
    } catch (err) {
        res.json({message: err});
    }
});






module.exports = router;
