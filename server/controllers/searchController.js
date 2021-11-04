const db = require('../models/database');

var axios = require("axios").default;

const searchController = {};

searchController.getChart = async (req, res, next) => {
  console.log(req.params);
  const options = {
    method: 'GET',
    url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-chart',
    params: req.query,
    headers: {
      'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
      'x-rapidapi-key': 'c29a23a042mshc19a576adaf8d84p113b64jsn5258c71dc685'
    }
  };
  try {
    const response = await axios.request(options)
    res.locals.chart = response.data;
    return next();
  }  
  catch (err) {
    return next(err);
  }
}

module.exports = searchController;
