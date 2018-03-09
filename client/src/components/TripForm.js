import React from 'react'

class TripForm extends React.Component {
 state = {}


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
        <h4>Name:</h4> 
          <input type="text" value={this.state.name} />
          </label>
        <input type="submit" value="Submit" />
        </form>
      </div>
    )}
  } 
export default TripForm;
