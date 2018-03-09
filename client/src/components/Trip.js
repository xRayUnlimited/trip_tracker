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
          <div>
            <div className="row">
                <div className="col s12 m6">
                  <div className="card">
                    <div className="card-image">
                      <img src="https://wikitravel.org/upload/en/2/23/Us-ca-sanfran-goldengate.jpg"/>
                      <span className="card-title">San Francisco</span>
                </div>
                    <div className="card-content">
                      <p>San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It's known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District's Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison.</p>
                        <a className="btn-floating teal"><i className="material-icons">visibility</i></a>
                        <a className="btn-floating red"><i className="material-icons">remove_circle_outline</i></a>
                  </div>
                  </div>
                </div>
              </div>
          </div>
        <button onClick={() => this.addTrip() }> Add Trip</button>
        </div>
      )
    }
  }
}


export default Trip;
