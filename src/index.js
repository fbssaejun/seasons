import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  //React.Component already has a constructor function, but writing another constructor function here overwrites its default constructor
  constructor(props) {
    //Super is a reference to parent's constructor function
    super(props);

    this.state = { lat: null, errorMessage: '' };

    //Get user's location from geolocation API(built in most of the existing browsers)
    window.navigator.geolocation.getCurrentPosition(
      //Success callback
      (position) => this.setState({ lat: position.coords.latitude }),
      //Fail callback
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  render () {
    
    return (
      <div>
        Latitude: {this.state.lat}
        Error: {this.state.errorMessage}
      </div>

    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);