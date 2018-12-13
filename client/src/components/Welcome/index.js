import React from 'react';
import EventList from '../EventList';
//CHRIS//Commenting out import Splash to test new Splash file SplashNew
// import Splash from '../Splash'
import SplashNew from '../Splash/SplashNew.js';

export default function Welcome(){
  return(
    <div>
      <SplashNew />
      <EventList />
    </div>
  )
}
