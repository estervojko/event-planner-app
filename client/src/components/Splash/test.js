import React, { Component } from 'react';
import SplashItem from './SplashItem';

export default class Test extends Component{
  constructor(props){
    super(props);
    this.state = {
      slideIndex: 1
    }
  }
  // let index = this.state.slideIndex;
  // showSlides(index);
  //next/prev controls
  plusSlides(n){
    showSlides(this.state.slideIndex)
  }
//the mechanism to make it work
  showSlides(n){
    var i;//the counter
    var index = this.state.slideIndex; //the state property
    var slides = document.querySelector(".mySlide"); //selecting the slide components
    if ( n > slides.length) {index = 1}//if the slide is the last one, go back to first
    if ( n < 1 ) {index = slides.length}//if slide is the first one, you can go to last
    for (i = 0; i < slides.length; i++){//for ever slide
      slides[i].style.display = "none";//make it invisible
    }
    slides[index-1].style.display = "block";//but for now, make visible
  }
  render(){
    return(
      <div className = "slideShow">
        <div className ="fade">
            <SplashItem className = "mySlide" id= "uno"/>
            <SplashItem className = "mySlide" id= "dos"/>
            <SplashItem className = "mySlide" id= "tres"/>
        </div>
        <p className = "prev" onclick = "nextSlide(-1)">&#10094;</p>
        <p className = "next" onclick = "nextSlide(1)">&#10095;</p>
      </div>

    )
  }
}
