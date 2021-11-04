const db = require('../models/database');

var axios = require("axios").default;

const transactionController = {};

// should:
// 1. post a new transaction with the passed in user id, symbol, price, time
// 2. return the new transaction to the client
transactionController.postTransaction = async (req, res, next) => {
  try {
    // to do get these values off the req and the res.locals
    const {user_id}= req.body;
    const {symbols} = req.query;
    const stock_name = res.locals.price['result'][0]['shortName'];
    const bought_price = res.locals.price['result'][0]['ask'];
    const values = [user_id, symbols, stock_name, bought_price]
    const insertTransaction = `INSERT INTO transactions (user_id, stock_ticker, stock_name, bought_price)
      VALUES ($1, $2, $3, $4)
      RETURNING *`;
    const reply = await db.query(insertTransaction, values);
    res.locals.transaction = reply.rows;
    return next();
  }
  catch(err) {
    console.error()
    return next(err);
  }
}

// should get all buys 
transactionController.getBuys = async (req, res, next) => {

}

// should get all sells
transactionController.getSells = async (req, res, next) => {

}

// should get all transactions that aren't sold, grouped by stock name, ave price
transactionController.getPortfolio = async (req, res, next) => {

}

module.exports = transactionController;
