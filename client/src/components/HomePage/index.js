import React, { Component } from 'react';
import Splash from '../Splash';
import EventList from '../EventList'
// import UserProfile from '../UserProfile'

export default class HomePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      events: [
        {
          id: 1,
          title: 'title1',
          description: 'descrip1',
          start_date: '2018-12-10 23:46:54-05',
          end_date: '2018-12-15 23:46:54-05',
          address: 'address1'
        },
        {
          id: 2,
          title: 'title2',
          description: 'descrip2',
          start_date: '2018-12-10 23:46:54-05',
          end_date: '2018-12-15 23:46:54-05',
          address: 'address3'
        },
        {
          id: 3,
          title: 'title3',
          description: 'descrip3',
          start_date: '2018-12-10 23:46:54-05',
          end_date: '2018-12-15 23:46:54-05',
          address: 'address3'
        },
        {
          id: 4,
          title: 'title4',
          description: 'descrip4',
          start_date: '2018-12-10 23:46:54-05',
          end_date: '2018-12-15 23:46:54-05',
          address: 'address4'
        }
      ]
    }
  }
  render(){
    return(
      <div>
        Test HomePage
        <Splash/>
        {/* <UserProfile/> */}
        <EventList events={this.state.events}/>
        <EventList events={this.state.events}/>
        <EventList events={this.state.events}/>
      </div>
    )
  }
}
