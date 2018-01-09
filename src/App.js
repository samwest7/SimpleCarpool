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
//import AddCar from './AddCar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      driver: "",
      seats: 1,
      passengers: []
    };
  }

  onChange = ({ target: { name, value }}) => this.setState({ [name]: value })

  handleAddCar = () => {
    this.setState({cars: [...this.state.cars, {driver: this.state.driver, seats: this.state.seats, passengers: this.state.passengers}]})
    this.setState({driver: "", seats: 1, passengers: []})
  }

  renderCars = (car) => (
    <div>
      <CarCard className="App-card" driver={car.driver} seats={car.seats} passengers={car.passengers}/>
    </div>
  );

  render() {
    return (
      <div>
        <h1>Car Pooler</h1>
        {/* <div>
          <CarCard className="App-card"/>
        </div> */}
        {/* ADD A CAR FORM */}
        {this.state.cars.map((car, i) => {
          return(this.renderCars(car));
        })}
        <div >
          <Card className="App-card">
            <CardTitle title="Add a Car" />
            <TextField
              name= "driver"
              value={this.state.driver}
              floatingLabelText="Driver"
              onChange={this.onChange}
            /><br />
            {/* Seat picker */}
            <SelectField
              floatingLabelText="Seats"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value={1} primaryText="1" />
              <MenuItem value={2} primaryText="2" />
              <MenuItem value={3} primaryText="3" />
              <MenuItem value={4} primaryText="4" />
              <MenuItem value={5} primaryText="5" />
            </SelectField>
            {/* List seat names.  */}
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
