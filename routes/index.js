const express = require('express');
const router = express.Router();

const usuarioModel = require('../models/usuario');


const create = require('../actions/create')(usuarioModel);
const find = require('../actions/find')(usuarioModel);
const findOne = require('../actions/findOne')(usuarioModel);
const remove = require('../actions/remove')(usuarioModel);
const update = require('../actions/update')(usuarioModel);


router.get('/user', find);
router.get('/user/:id', findOne);
router.post('/user', create);
router.delete('/user/:id', remove);
router.put('/user/:id', update);


/* GET home page. */
router.get('/', function (req, res) {
  res.json({ msg: 'hello world' });
});

module.exports = router;
