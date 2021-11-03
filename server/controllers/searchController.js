const db = require('../models/database');

var axios = require("axios").default;

const searchController = {};

searchController.getChart = async (req, res, next) => {
  const options = {
    method: 'GET',
    url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-chart',
    params: {interval: '5m', symbol: 'AMRN', range: '1d', region: 'US'},
    headers: {
      'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
      'x-rapidapi-key': 'c29a23a042mshc19a576adaf8d84p113b64jsn5258c71dc685'
    }
  };
  try {
    const response = await axios.request(options)
    res.locals.chart = response.data;
    // console.log(res.locals.chart);
    return next();
  }  
  catch (err) {
    console.error(err);
    return next(err);
  }
}

module.exports = searchController;
