import React, { Component } from 'react';
import EventList from '../EventList';
import Splash from '../Splash'

export default class Welcome extends Component{
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
        <Splash />
        <EventList events={this.props.events}/>
      </div>
    )
  }
}
