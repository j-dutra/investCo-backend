const express = require('express');
const service = require('../service/service')

const router = express.Router();
router.post("/user", async(req, res) => {
    try {
        const result = service.create(req.body);
        res.status(200).send(result);        
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router