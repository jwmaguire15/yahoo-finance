const express = require('express');
const searchController = require('../controllers/searchController');
const router = express.Router();

router.get('/', searchController.getChart, (req, res) => {
  return res.status(200).send(res.locals.chart);
});

module.exports = router;