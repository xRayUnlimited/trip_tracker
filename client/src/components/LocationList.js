import React from 'react';
import axios from 'axios';

class LocationList extends React.Component {
  state = { 

  }
  render(){
    return(
      <div> 
        <h3>{name}</h3>
        <h5>{this.props.address}</h5>
      </div>
    )
  }
}

export default LocationList;
