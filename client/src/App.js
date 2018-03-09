import React, { Component } from 'react';
import Trip from './components/Trip';
import LocationList from './components/LocationList';
import axios from 'axios';

class App extends Component {
  state={ tripsShowing: false, trips: [] }

  componentDidMount() {
    axios.get('/api/trips')
      .then( res => this.setState({ trips: res.data }) )
  }

  viewTrip() {
    const {tripsShowing} = this.state
    this.setState({ tripsShowing: !tripsShowing })
  }

  render() {
    const { tripsShowing, addTrip } = this.state
      if (tripsShowing) {
        return(
          <Trip trips={this.state.trips}/>
        )
      } else
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
                  <p style={ styles.link } onClick={() => this.viewTrip()}>View All Trips!</p>
                  <br />
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
  link: {
    color: 'blue',
    cursor: 'pointer',
  }

}

export default App;
