'use strict'

const express = require('express');
const favicon = require('serve-favicon'); // eslint-disable-line no-unused-vars
const app = express();

app.set('view engine', 'pug');

const path = require('path')
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, '/sass'),
  dest: path.join(__dirname, '/public/styles'),
  indentedsyntax: true,
  sourcemap: true
}));

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000; // eslint-disable-line no-magic-numbers
app.listen(PORT, () => {
  console.log(`Server started, listeing on ${PORT}`) // eslint-disable-line no-console
})

module.exports = app;
