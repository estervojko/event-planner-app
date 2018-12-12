import React, { Component } from 'react';
import EventList from '../EventList';
import Splash from '../Splash'

export default class Welcome extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return(
      <div>
        <Splash />
        <EventList events={this.props.events}/>
        <EventList events={this.props.events}/>
      </div>
    )
  }
}
