import React, { Component } from 'react';
import SplashItem from './SplashItem';

export default class Test extends Component{
  constructor(props){
    super(props);
    //Dataset
    const data = [
      {
        id: "slide1",
        imagePath: "https://buildingontheword.org/wp-content/uploads/2016/08/cat.jpg",
        imageAlt: "Slide 1 Image",
        title: "Slide 1",
        subtitle: "Slide 1 Image SubTitle",
        text: "Slide 1 Image Text",
        action: "Slide 1 Image Action",
        actionHref: "href"
      },
      {
        id         : "slide2",
        imagePath  : "https://www.pets4homes.co.uk/images/articles/4295/large/early-neutering-of-kittens-pros-and-cons-598ddb68021a9.jpg",
        imageAlt   : "Slide 2 Image",
        title      : "Slide 2",
        subtitle   : "Slide 2 Image SubTitle",
        text       : "Slide 2 Image Text",
        action     : "Slide 2 Image Action",
        actionHref : "href"
      }

    ];
    //the component state
    this.state = {
      currentSlide:0,
      data: data
    }
  };

  render(){
    return(
      <div className = 'slideShow'>
        
      </div>

    )
  }
}
