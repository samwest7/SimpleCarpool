import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import CarCard from './CarCard';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
//import AddCar from './AddCar';

class App extends Component {

  handleAddCar = () => {

  }

  render() {
    return (
      <div>
        <div>
          <CarCard className="App-card"/>
        </div>

        {/* ADD A CAR FORM */}
        <div >
          <Card className="App-card">
            <CardTitle title="Add a Car" />
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
            /><br />
            <CardActions>
              <FlatButton label="Add Car" onClick={this.handleAddCar} />
            </CardActions>
          </Card>
        </div>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RaisedButton label="Button" /> */}
      </div>
    );
  }
}

export default App;
