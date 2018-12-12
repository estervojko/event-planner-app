import React  from 'react';
import Splash from '../Splash';
import EventList from '../EventList'

export default function HomePage(){
  return(
    <div>
      Test HomePage
      <Splash/>
      {/* <UserProfile/> */}
      <EventList
        events={this.state.events}
        userId={this.props.userId}
      />
      <EventList
        events={this.state.events}
        userId={this.props.userId}
      />
      <EventList
        events={this.state.events}
        userId={this.props.userId}
      />
    </div>
  )
}
