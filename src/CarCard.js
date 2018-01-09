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
      <Card className='App-card' expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title= {this.props.driver}
          subtitle= {this.state.seats}
          avatar={Avatar}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
        <CardText expandable={true}>
          Map passengers here..
        </CardText>
        <CardActions>
          {/*  Put some card actions here..*/}
        </CardActions>
      </Card>
    );
  }
}
