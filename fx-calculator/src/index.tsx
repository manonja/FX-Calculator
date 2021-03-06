import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SPA from './components/pages/SPA';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SPA />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
