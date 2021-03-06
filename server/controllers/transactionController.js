const db = require('../models/database');

var axios = require("axios").default;

const transactionController = {};

// should:
// 1. post a new transaction with the passed in user id, symbol, price, time
// 2. return the new transaction to the client
transactionController.postTransaction = async (req, res, next) => {
  try {
    const {user_id}= req.body;
    const {symbols} = req.query;
    const stock_name = res.locals.price['result'][0]['shortName'];
    const bought_price = res.locals.price['result'][0]['ask'];
    const values = [user_id, symbols.toUpperCase(), stock_name, bought_price]
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
  try {
    const {user_id}= req.query;
    const values = [user_id]
    const insertTransaction = `
    SELECT * FROM transactions WHERE user_id = $1
    AND sold_price isnull
    `;
    const reply = await db.query(insertTransaction, values);
    res.locals.buys = reply.rows;
    return next();
  }
  catch(err) {
    return next(err)
  }
}

transactionController.putSale = async (req, res, next) => {
  try {
    const {transaction_id}= req.body;
    const sold_price = res.locals.price['result'][0]['bid'];

    const values = [transaction_id, sold_price, new Date(Date.now()).toISOString()]
    const updateTransaction = `UPDATE transactions 
      SET sold_price = $2,
        sold_time = $3
      WHERE transaction_id = $1
      RETURNING *`;
    const reply = await db.query(updateTransaction, values);
    res.locals.sells = reply.rows;
    return next();
  }
  catch(err) {
    console.error()
    return next(err);
  }
}

// should get all sells
transactionController.getSells = async (req, res, next) => {
  try {
    const {user_id}= req.query;
    const values = [user_id]
    const insertTransaction = `
    SELECT * FROM transactions WHERE user_id = $1
    AND sold_price IS NOT NULL
    `;
    const reply = await db.query(insertTransaction, values);
    res.locals.sells = reply.rows;
    return next();
  }
  catch(err) {
    return next(err)
  }
}

module.exports = transactionController;
