import React, { Component } from 'react';
import EventList from '../EventList';
//CHRIS//Commenting out import Splash to test new Splash file SplashNew
// import Splash from '../Splash'
import SplashNew from '../Splash/SplashNew.js';

export default class Welcome extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <SplashNew events={this.props.events} />
        <EventList events={this.props.events}/>
        <EventList events={this.props.events}/>
      </div>
    )
  }
}
