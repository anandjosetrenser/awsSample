import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import logo from './logo.svg';
import './App.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut , user  } : {signOut? : any , user? : any}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {JSON.stringify(user)}</h1>
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
