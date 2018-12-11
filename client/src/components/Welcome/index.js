import React, { Component } from 'react';
import EventList from '../EventList'

export default class Welcome extends Component{
  constructor(props){
    super(props);
    this.state = {
      events: [
        {
          id: 1,
          title: 'what',
          description: 'what',
          start_date: '2018-12-10 23:46:54-05',
          end_date: '2018-12-15 23:46:54-05',
          address: 'what'
        },
        {
          id: 2,
          title: 'what',
          description: 'what',
          start_date: '2018-12-10 23:46:54-05',
          end_date: '2018-12-15 23:46:54-05',
          address: 'what'
        },
        {
          id: 3,
          title: 'what',
          description: 'what',
          start_date: '2018-12-10 23:46:54-05',
          end_date: '2018-12-15 23:46:54-05',
          address: 'what'
        },
        {
          id: 4,
          title: 'what',
          description: 'what',
          start_date: '2018-12-10 23:46:54-05',
          end_date: '2018-12-15 23:46:54-05',
          address: 'what'
        }
      ]
    }
  }

  render(){
    return(
      <div>
        Test Welcome
        <EventList events={this.state.events}/>
      </div>
    )
  }
}
