const express = require('express');
const searchController = require('../controllers/searchController');
const transactionController = require('../controllers/transactionController');
const router = express.Router();

router.post('/', searchController.getCurrentPrice, transactionController.postTransaction, (req, res) => {
  // send whatever is on locals back 
  return res.status(201).json(res.locals.transaction);
});

router.get('/', transactionController.getBuys, (req, res) => {
  // send whatever is on locals back 
  return res.status(201).json(res.locals.buys);
});

module.exports = router;