import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>Cloud computing - AWS Amplify for web - Nhóm 15</h2>
        <h2>Amplify-demo-update2</h2>
        <h2>Tô Thị Mỹ Nhân</h2>
        <h2>Trần Phương Linh</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
