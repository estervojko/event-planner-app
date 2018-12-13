import React  from 'react';
import SplashNew from '../Splash/SplashNew.js';
import EventList from '../EventList'

export default function HomePage(props){
  return(
    <div>
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
