const express = require('express');
const searchController = require('../controllers/searchController');
const transactionController = require('../controllers/transactionController');
const router = express.Router();

router.post('/', searchController.getCurrentPrice, transactionController.postTransaction, (req, res) => {
  // send whatever is on locals back 
  return res.status(201).json(res.locals.transaction);
});

router.get('/', transactionController.getBuys, transactionController.getSells, (req, res) => {
  // send whatever is on locals back 
  return res.status(201).send({
    buys: res.locals.buys,
    sells: res.locals.sells,
  });
});

router.put('/', searchController.getCurrentPrice, transactionController.putSale, (req, res) => {
  // send whatever is on locals back 
  return res.status(201).json(res.locals.sells);
});

module.exports = router;