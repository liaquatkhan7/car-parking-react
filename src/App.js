import React, { Component } from 'react';
import './App.css';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

const style = {
margin: 12,
};
class App extends Component {

  render() {
    return (
      <div className="App">
        <AppBar
          title="Car Parking"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />

        <Link to='/signin'><RaisedButton label="SIGNIN" secondary={true} style={style} /></Link>
        <Link to='/signup'><RaisedButton label="SIGNUP" secondary={true} style={style} /></Link>
      </div>
    );
  }
}

export default App;
