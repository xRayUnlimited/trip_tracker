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
        <div className="App">
          <header style={styles.header}>
            <h2 className="App-title">Trips</h2>
          </header>
        </div>
        <TripForm />
        </div>
      )
    } else {
      return(
        <div>
          <div className="App">
            <header style={styles.header}>
              <h2 className="App-title">Trips</h2>
            </header>
          </div>
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
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <img src="https://www.lakepowell.com/media/167205/houseboat-beached-scenic_1000x667.jpg"/>
                      <span className="card-title">Lake Powell</span>
                  </div>
                  <div className="card-content">
                    <p>Lake Powell is a reservoir on the Colorado River, straddling the border between Utah and Arizona. It is a major vacation spot that around two million people visit every year.</p>
                      <a className="btn-floating teal"><i className="material-icons">visibility</i></a>
                      <a className="btn-floating red"><i className="material-icons">remove_circle_outline</i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <img src="https://d2t1047w253zzm.cloudfront.net/pm-cities/chicago-il-apartments-for-rent.jpg.md.jpg/"/>
                      <span className="card-title">Chicago</span>
                  </div>
                  <div className="card-content">
                    <p>Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned for its museums, including the Art Institute of Chicago with its noted Impressionist and Post-Impressionist works.</p>
                      <a className="btn-floating teal"><i className="material-icons">visibility</i></a>
                      <a className="btn-floating red"><i className="material-icons">remove_circle_outline</i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <img src="https://fthmb.tqn.com/SfTQtlQOYOR5qDyCi1tVtQZpwfE=/960x0/filters:no_upscale()/2231903771_5f260e460a_o-56b7d8425f9b5829f83c5ec0.jpg"/>
                      <span className="card-title">Venice</span>
                  </div>
                  <div className="card-content">
                    <p>Venice, the capital of northern Italy's Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark's Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city's red roofs.</p>
                      <a className="btn-floating teal"><i className="material-icons">visibility</i></a>
                      <a className="btn-floating red"><i className="material-icons">remove_circle_outline</i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <img src="http://gotravelaz.com/wp-content/uploads/images/Glacier_National_Park.jpg"/>
                      <span className="card-title">Glacier National Park</span>
                  </div>
                  <div className="card-content">
                    <p>Glacier National Park is a 1,583-sq.-mi. wilderness area in Montana's Rocky Mountains, with glacier-carved peaks and valleys running to the Canadian border. It's crossed by the mountainous Going-to-the-Sun Road. Among more than 700 miles of hiking trails, it has a route to photogenic Hidden Lake. Other activities include backpacking, cycling and camping. Diverse wildlife ranges from mountain goats to grizzly bears.</p>
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

export default Trip;
