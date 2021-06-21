import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './assets/styles/index.css';
import reportWebVitals from './reportWebVitals';


import store from './store';

const rootComponent = (
  <Provider store={store}>
    <App/>
  </Provider>
);

const target = document.getElementById('root');

render(rootComponent, target);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
