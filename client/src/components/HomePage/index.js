import React  from 'react';
import SplashNew from '../Splash/SplashNew.js';
import EventList from '../EventList'

export default function HomePage(props){
  return(
    <div>
      <EventList
        token={props.token}
        user={props.user}
        view={props.view}
      />
    </div>
  )
}
