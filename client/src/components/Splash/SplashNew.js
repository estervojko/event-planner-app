import React, {Component} from 'react';
import './SplashNew.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft);
library.add(faAngleRight);

export default class SplashNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://www.northshorevisitor.com/wp-content/uploads/2015/04/kayaking-1.jpg",
        "https://c1.staticflickr.com/3/2895/33959134422_caa8d09289_b.jpg",
        "http://traventuria.com/wp-content/uploads/2016/10/guided-hiking-bulgaria.jpg",
        "http://www.totallyclapham.co.uk/wp-content/uploads/2015/01/clapham-cycle-club-at-bandstand.jpg"
      ],
      currentSlide: 0
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.nextSlide(), 4000);
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

  renderSlideText() {
    switch(this.state.currentSlide) {
      case 0:
        return (
          <div className="splash-img-text">
            <div className="splash-img-text-title">
              Kayaking
            </div>
            <div className="splash-img-text-info">
              Navigate the rapids with friends! Begins in April.
            </div>
          </div>
        )
      case 1:
        return (
          <div className="splash-img-text">
            <div className="splash-img-text-title">
              Technology
            </div>
            <div className="splash-img-text-info">
              Come meet like-minded individuals interested in all things tech!
            </div>
          </div>
        )
      case 2:
        return (
          <div className="splash-img-text">
            <div className="splash-img-text-title">
              Backpacking
            </div>
            <div className="splash-img-text-info">
              Brave the rocky frontier! Experienced/Advanced hikers only!
            </div>
          </div>
        )
      case 3:
        return (
          <div className="splash-img-text">
            <div className="splash-img-text-title">
              Biking
            </div>
            <div className="splash-img-text-info">
              Come ride with a friendly group of people who encourage new riders!
            </div>
          </div>
        )
      default:
        console.log('This is a render slide error!');
    }
  }

  render() {
    return(
      <div className = "splashNew">
        <button className="previous-slide-button" onClick={this.prevSlide}><FontAwesomeIcon icon="angle-left"/></button>
        <div className="splash-img-container">
          {this.renderSlide()}
          {this.renderSlideText()}
        </div>
        <button className="next-slide-button" onClick={this.nextSlide}><FontAwesomeIcon icon="angle-right"/></button>
      </div>
    )
  }
}
