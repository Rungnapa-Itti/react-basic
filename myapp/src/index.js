import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin : 0;
    background : "#ccc";
  }
`

const name ="Rungnapa"
const element = <h1>Hello {name}</h1>

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
