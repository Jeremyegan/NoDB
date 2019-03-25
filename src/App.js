import React, { Component } from 'react';
import './App.css';

import BucketlistWrapper from './components/Bucketlistwrapper'
import Experience from './components/Experience';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bucketlist</h1>
        </header>
    <body>
      <BucketlistWrapper />
    </body>
        <footer>
          <h2>Live</h2>
        </footer>
      </div>
    );
  }
}

export default App;
