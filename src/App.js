// import logo from './logo.svg';
import './App.css';

import React from 'react';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import CreditCardForm from './components/CreditCardForm';

function App() {
  return (
    <div className="App">
        
      <div>
          <CreditCardForm />
      </div>
    </div>
  );
}

// export default withAuthenticator(App);
export default (App);

