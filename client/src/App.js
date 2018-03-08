import React, { Component } from 'react';
import Trip from './components/Trip'
import LocationList from './components/LocationList'

class App extends Component {
  render() {
    return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src="images/sample-1.jpg" />
            <span className="card-title">Card Title</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
          <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>

    );
  }
}

export default App;
