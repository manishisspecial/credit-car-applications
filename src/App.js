import logo from './logo.svg';
import './App.css';

import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import CreditCardForm from './components/CreditCardForm';

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Welcome to Yelowind Services</h1>
      <div>
          <h1>Credit Card Application</h1>
          <CreditCardForm />
      </div>
    </div>
  );
}

export default withAuthenticator(App);

