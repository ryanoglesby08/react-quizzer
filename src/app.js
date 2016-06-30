import React from 'react';
import ReactDOM from 'react-dom';

import Quiz from './quiz'
const data = require('./data.json');

ReactDOM.render(
  <Quiz question={data} />,
  document.getElementById("app")
);