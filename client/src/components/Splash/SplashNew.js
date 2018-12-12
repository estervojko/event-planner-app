import React, {Component} from 'react';
import './SplashNew.css';

export default class SplashNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://buildingontheword.org/wp-content/uploads/2016/08/cat.jpg",
        "https://www.pets4homes.co.uk/images/articles/4295/large/early-neutering-of-kittens-pros-and-cons-598ddb68021a9.jpg",
        "https://www.simpsonspremium.com/wp/wp-content/uploads/2017/02/cat.jpeg",
        "https://www.healthypawspetinsurance.com/Images/V3/DogAndPuppyInsurance/Dog_CTA_Desktop_HeroImage.jpg"
      ],
      currentSlide: 0
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.nextSlide(), 3500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextSlide() {
    switch(this.state.currentSlide) {
      case 0:
        return this.setState({currentSlide: 1})
      case 1:
        return this.setState({currentSlide: 2})
      case 2:
        return this.setState({currentSlide: 3})
      case 3:
        return this.setState({currentSlide: 0})
      default:
        console.log('This is a next slide splash error!');
    }
  }

  prevSlide() {
    switch(this.state.currentSlide) {
      case 0:
        return this.setState({currentSlide: 3})
      case 1:
        return this.setState({currentSlide: 0})
      case 2:
        return this.setState({currentSlide: 1})
      case 3:
        return this.setState({currentSlide: 2})
      default:
        console.log('This is a previous slide splash error!');
    }
  }

  renderSlide() {
    switch(this.state.currentSlide) {
      case 0:
        return (<img src={this.state.images[0]} alt='image0'/>)
      case 1:
        return (<img src={this.state.images[1]} alt='image1'/>)
      case 2:
        return (<img src={this.state.images[2]} alt='image2'/>)
      case 3:
        return (<img src={this.state.images[3]} alt='image3'/>)
      default:
        console.log('This is a render slide error!');
    }
  }

  render() {
    return(
      <div className = "splashNew">
        <button className="previous-slide-button" onClick={this.prevSlide}>Left</button>
        <div className="splash-img-container">
          {this.renderSlide()}
          <div className="splash-img-text">
            <div className="splash-img-text-title">
              Dummy Title Text
            </div>
            <div className="splash-img-text-info">
              This is where a paragraph describing this SplashPage goes.
            </div>
          </div>
        </div>
        <button className="next-slide-button" onClick={this.nextSlide}>Right</button>
      </div>
    )
  }
}
