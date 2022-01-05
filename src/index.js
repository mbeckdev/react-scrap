// react router v6 https://www.youtube.com/watch?v=0cSVuySEB0A&t=476s

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  document.getElementById('root')
);

function Home() {
  return (
    <div>
      <h1>Home router</h1>
    </div>
  );
}
