import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
    <div>
      <div className="App">
        <header style={styles.header}>
          <h1 className="App-title">Welcome to Your Trip Tracker!</h1>
        </header>
      </div>
      <div className="row">
      <div className="col s6 offset-s3">
        <div className="card">
          <div className="card-image">
            <img src="http://ritzybee.typepad.com/.a/6a00e5503c88988833013481999d8f970c-800wi" alt="person on bmw"/>
            <a className="btn-floating halfway-fab waves-effect waves-light teal"><i className="small material-icons">airport_shuttle</i></a>
          <div className="card-content">
            <p>View All Trips!</p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>

    );
  }
}

const styles = {
  header: {
    backgroundColor: "#18726B",
    color: "white",
    height: "150px",
    padding: "20px",
    textAlign: "center",
    fontFamily: 'Coiny',
  },

}

export default App;
