import React, {Component} from 'react';
import EventList from '../EventList';
import './index.css'
import moment from 'moment';
import EventForm from '../EventForm'
const {userReq} = require('../../AJAXRequests/userReq');
const {eventReq} = require('../../AJAXRequests/eventReq');
const {attendeeReq} = require('../../AJAXRequests/attendeeReq');

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      eventFormData: {
        title: '',
        description: '',
        start_date: moment().format(),
        end_date: moment().format(),
        address: '',
        img: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentWillMount() {
    await this.getUser()
  }

  getUser = async () => {
    const user_id = this.props.user.id
    try {
      const user = await userReq.getUser(user_id);
      this.setState({user: user})
    } catch (e) {
      console.log(e)
    }
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState((prevState) => ({
      eventFormData: {
        ...prevState.eventFormData,
        [name]: value
      }
    }))
  }

  async handleSubmit(e) {
    e.preventDefault();
    const postedEvent = await eventReq.postEvent(this.state.eventFormData, this.props.token);
    const postedAttendee = await attendeeReq.postAttendee(postedEvent.id, this.props.user.id, {
      isOrganizer: true
    }, this.props.token)
  }

  render() {
    return (<div className="userProfile">
        <div className='user-info'>
          <div className="user-image"></div>
            <div>{this.state.user.username}</div>
          <div className='user-details'>
            <div>Name: {this.state.user.first_name} {this.state.user.last_name}</div>
            <div>Address: {this.state.user.address}</div>
          </div>
        </div>
        <div className="userList">
          {
            this.state.user
              ? <EventList view={this.props.view} user={this.props.user}/>
              : ''
          }
        </div>
      <EventForm event={this.state.eventFormData} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      <button>Delete Event</button>
    </div>)
  }
}
