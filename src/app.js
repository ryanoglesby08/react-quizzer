/* global document:false */

import React from 'react';
import ReactDOM from 'react-dom';

import Quiz from './quiz'
const data = require('./data.json');

require('./styles/app.scss');

ReactDOM.render(
  <Quiz questions={data} />,
  document.getElementById("app")
);