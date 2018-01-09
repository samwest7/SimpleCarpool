import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import CarCard from './CarCard';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'
//import AddCar from './AddCar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      driver: "",
      seats: [1],
      passengers: ["", "", "Sam", "", "", "", "", ""],
      open: false
    };
  }

  onChange = ({ target: { name, value }}) => this.setState({ [name]: value })

  handleSeatChange = (event, index, seats) => {
      this.setState({seats, })

  }

  handleAddCar = () => {
    this.setState({cars: [...this.state.cars, {driver: this.state.driver, seats: this.state.seats, passengers: this.state.passengers}]})
    this.setState({driver: "", seats: 1, passengers: []})
  }

  renderCars = (car) => (
    <div>
      <CarCard className="App-card" driver={car.driver} seats={car.seats} passengers={car.passengers}/>
    </div>
  );
  renderSeats = (i) => (
    <div>
      <TextField
        name={"Passenger" + i}
        value={this.state.passengers[i-1]}
        floatingLabelText="Passenger"
        onChange={this.onChange}
      /><br />
    </div>
  );

  render() {
    return (
      <div>
        <AppBar
          style={{ backgroundColor: '#7cb342' }}
          title={<span>Car Pooler</span>}
        />

        {this.state.cars.map((car, i) => {
          return(this.renderCars(car));
        })}

          <Card className="App-card">
            <TextField
              name= "driver"
              value={this.state.driver}
              floatingLabelText="Driver"
              onChange={this.onChange}
            /><br />
            {/* Seat picker */}
            <SelectField
              className="Select-field"
              floatingLabelText="Seats"
              value={this.state.seats.length}
              onChange={this.handleSeatChange}
            >
              <MenuItem value={[1]} primaryText="1" />
              <MenuItem value={[1,2]} primaryText="2" />
              <MenuItem value={[1,2,3]} primaryText="3" />
              <MenuItem value={[1,2,3,4]} primaryText="4" />
              <MenuItem value={[1,2,3,4,5]} primaryText="5" />
              <MenuItem value={[1,2,3,4,5,6]} primaryText="6" />
              <MenuItem value={[1,2,3,4,5,6,7]} primaryText="7" />
              <MenuItem value={[1,2,3,4,5,6,7,8]} primaryText="8" />
            </SelectField>
              {/* List seat names.  */}
            {/* {this.renderSeats()} */}

            {this.state.seats.map((seat, i) => {
              return(this.renderSeats(seat));
            })}


            <CardActions>
              <FlatButton label="Add Car" onClick={this.handleAddCar} />
            </CardActions>
          </Card>

      { /* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RaisedButton label="Button" /> */}
      </div>
    );
  }
}

export default App;
