/* eslint no-unused-vars: 0 */
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use(({ code, error }, req, res, next) => {
  res.status(code).json({ error });
});

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));