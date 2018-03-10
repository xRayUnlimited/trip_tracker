import React from 'react';
import axios from 'axios';

class TripForm extends React.Component {
 state = {name: ''}


 handleSubmit = e => {
 e.preventDefault();
 const { name } = this.state
 const trip = { name }
 this.props.addTrip(trip)
 this.setState({name: ''})
 }

 handleChange = (e) => {
   let { name, value } = e.target
   this.setState({[name]: value})
 }

//  const trip = { name: this.state.name }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
        <h4>Name:</h4> 
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
        <input type="submit" value="Submit" />
        </form>
      </div>
    )}

  }
export default TripForm;
