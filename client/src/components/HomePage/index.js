import React  from 'react';
import Splash from '../Splash';
import EventList from '../EventList'

export default function HomePage(props){
  return(
    <div>
      Test HomePage
      <Splash/>
      {/* <UserProfile/> */}
      <EventList
        events={props.events}
        token={props.token}
        user={props.user}
        logged={props.logged}
      />
      <EventList
        events={props.events}
        token={props.token}
        user={props.user}
        logged={props.logged}
      />
      <EventList
        events={props.events}
        token={props.token}
        user={props.user}
        logged={props.logged}
      />
    </div>
  )
}
