import React from 'react';
import TripForm from './TripForm';
import axios from 'axios';

class Trip extends React.Component {
  state={ addTrip: false }

  addTrip = () => {
    const {addTrip} = this.state
    this.setState({ addTrip: !addTrip })
  }

    render() {
      const { addTrip } = this.state;
     if (addTrip) {
      return(
        <div>
        <h3>Trips</h3>
        <TripForm />
        </div>
      )
    } else {
      return(
        <div>
        <h3>Trips</h3>
        <button onClick={() => this.addTrip() }> Add Trip</button>
        </div>
      )
    }
  }
}


export default Trip;