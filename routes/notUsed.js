const express = require('express');
const router = express.Router();
const path = require('path');

//Route handlers
router.get('/hello(.html)?', (req, res, next) => {
    console.log('attempted to load hello.html');
    next();
}, (req, res) => {
    res.send('Hello World!');
});

//chaining route handlers
const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next();
}

const three = (req, res) => {
    console.log('three');
    res.send('Finished');
}

router.get('/chain(.html)?', [one, two, three]);

module.exports = router;