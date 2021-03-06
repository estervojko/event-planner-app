import React, { Component } from 'react';
import SplashItem from '../SplashItem';
import './index.css';

export default class Splash extends Component{
  constructor(props){
    super(props);
    this.state = {
      images: [
        "https://buildingontheword.org/wp-content/uploads/2016/08/cat.jpg",
        "https://www.pets4homes.co.uk/images/articles/4295/large/early-neutering-of-kittens-pros-and-cons-598ddb68021a9.jpg",
        "https://www.simpsonspremium.com/wp/wp-content/uploads/2017/02/cat.jpeg"
      ],
      currentSlide: 0, //counter for de slide

    }
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }
prevSlide(){//in order to move forward an image
  if(this.setState.currentSlide = this.state.images.length){
    return this.setState({
      currentSlide:-3,
      translateValue: -3
    })
  }
  this.setState(prevState => ({
    currentSlide: prevState.currentSlide - 1,
    translateValue: prevState.translateValue + -(this.slideWidth())
  }));
}

nextSlide(){//in order to move backwards
  if(this.setState.currentSlide = this.state.images.length - 1){//if you are at the last image
    return this.setState({//return to the previous state, thus the first image in array
      currentSlide: 0,
      translateValue: 0
    })
  }
  this.setState(prevState => ({
    currentSlide: prevState.currentSlide + 1,
    translateValue: prevState.translateValue + -(this.slideWidth())
  }));
}

slideWidth(){//function to determine width of slide
  return document.querySelector('.slideShow').clientWidth
}

  render(){
    return(
      <div  className = "splash">
        <button onClick = {this.nextSlide}>right</button>
        <button onClick={this.prevSlide}>left</button>
        <div className = "slideShow" style={{
          transform: `translateX(${this.state.translateValue} * 10).toString() + px)`,
          //uses translateX css property to move the picture along the X axis
          transition: `transform ease-out 0.45s`//make the sliding very smooth
        }}>
        {this.state.images[this.state.currentSlide]}
        {
          this.state.images.map((test, i) => (
            <SplashItem key = {i} slide = {test}/>
          ))
        }
        </div>
      </div>
    )
  }
}