import React, { Component } from 'react';
import CommentForm from '../CommentForm';
import moment from 'moment';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import "./index.css";

export default class CommentList extends Component{
  constructor(props){
    super(props);
    this.state = {
      comments: [],
      comment: {
        content: '',
        date: moment().format()
      }
    }

    this.handleComment = this.handleComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleComment(e){
    const {name, value} = e.target;
    this.setState((prevState) => ({
      comment: {
        ...prevState.comment,
        [name] : value
      }
    }))
  }

  async handleSubmit(e){
    e.preventDefault()

    const user = jwtDecode(localStorage.getItem('token'))
    const event = this.props.event;
    const commentPosted = await axios.post(`http://localhost:3000/users/${user.id}/events/${event.id}/comments`, this.state.comment)
    console.log(commentPosted.data);
    this.setState((prevState) => ({comments: [...prevState.comments, commentPosted.data]}));

  }

  async componentDidMount(){
    const event = this.props.event;
    const events = await axios.get(`http://localhost:3000/events/${event.id}/comments`);
    console.log(events.data);
    this.setState({comments: events.data});
  }


  render(){
    return(
      <div>
        <CommentForm handleComment={this.handleComment} handleSubmit={this.handleSubmit} comment={this.state.comment}/>
        <div className="CommentList">
          {
            this.state.comments.map(c => {
              return(
                <div key={c.id} >
                  <p>{jwtDecode(localStorage.getItem('token')).username}</p>
                  <p>{c.date}</p>
                  <p>{c.content}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
