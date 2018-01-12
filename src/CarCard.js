import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Avatar from './Avatar2.jpg';
import './CarCard.css';

export default class CarCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  render() {
    return (
      <Card className='Car-card' expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title= {this.props.driver + "'s car"}
          subtitle= {this.state.seats}
          avatar={Avatar}
          actAsExpander={true}
          showExpandableButton={true}
        />
        {/* <CardTitle subtitle={this.props.seats.length} expandable={true} /> */}
        <CardText expandable={true}>
          <h3>Passengers:</h3>
          {this.props.passengers.map((passenger, i) => (<p>{passenger}</p>))}
        </CardText>
        <CardActions>
          {/*  Put some card actions here..*/}
        </CardActions>
      </Card>
    );
  }
}
