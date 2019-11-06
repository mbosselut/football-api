const express = require('express');
const Team = require('./model');
const { Router } = express;
const router = new Router();
// const db = require('../db');

router.get('/team', (req, res, next) => {
    Team.findAll()
        .then(teams => {
            console.log('hello from findAll');
            return res.send(teams);
        })
        .catch(error => {
            console.log('the app crashed', error);
            next(error);
        });
});

router.post('/team', (req, res, next) => {
    Team.create(req.body)
        .then(team => res.json(team))
        .catch(err => next(err));
});

module.exports = router;
