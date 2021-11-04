/* eslint no-unused-vars: 0 */
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// require in routers
const orderRouter = require('./routes/order');
const portfolioRouter = require('./routes/portfolio');
const searchRouter = require('./routes/search');
const transactionRouter = require('./routes/transaction');

// define route handlers
app.use('/order', orderRouter);
app.use('/portfolio', portfolioRouter);
app.use('/search', searchRouter);
app.use('/transaction', transactionRouter);

// respond with main app 
// TODO - FIGURE OUT IF THIS IS RIGHT!
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../build')));
  app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js'))
  });
}

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred on line 37 of Server.js' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));