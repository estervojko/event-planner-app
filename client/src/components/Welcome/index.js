import React from 'react';
import EventList from '../EventList';
import SplashNew from '../Splash/SplashNew.js';

export default function Welcome(props) {
  return (<div>
    <SplashNew/>
    <EventList view={props.view}/>
  </div>)
}
