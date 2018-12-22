import React, { Component } from 'react';
import CommentForm from '../CommentForm';
import moment from 'moment';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import "./index.css";

//importing userReq
const {userReq} = require('../../AJAXRequests/userReq');

export default class CommentList extends Component{
  constructor(props){
    super(props);
    this.state = {
      comments: [],
      comment: {
        user_id: (localStorage.getItem('token') !== null) ? jwtDecode(localStorage.getItem('token')).id : null,
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
    if(localStorage.getItem('token')){
      const user = jwtDecode(localStorage.getItem('token'))
      const event = this.props.event;
      const commentPosted = await axios.post(`http://localhost:3000/users/${user.id}/events/${event.id}/comments`, this.state.comment)
      const comment = commentPosted.data
      const userId = comment.user_id
      const commentUser = await userReq.getUser(userId);
      const username = commentUser.username
      Object.assign(comment, {username: username})
      this.setState((prevState) => ({comments: [...prevState.comments, comment].reverse()}));
    }
    else{
      const user = {}
      user.id = 'anon'
      const event = this.props.event;
      const commentPosted = await axios.post(`http://localhost:3000/users/${user.id}/events/${event.id}/comments`, this.state.comment)
      const comment = commentPosted.data
      Object.assign(comment, {username: null})
      this.setState((prevState) => ({comments: [...prevState.comments, comment].reverse()}));
    }


  }


  // I am trying to pull the username for each comment from the users table, by looking at the user_id in the comments table
  async componentDidMount(){
    const event = this.props.event;
    const comments = await axios.get(`http://localhost:3000/events/${event.id}/comments`);
    const comms = await Promise.all(comments.data.map( async c => {
        let userId = null
        if (c.user_id) {
          userId = c.user_id
        }
        if(userId){
          const commentUser = await userReq.getUser(userId);
          const username = commentUser.username
          Object.assign(c, {username: username})
          return c
        }
        return c
      }))
    await this.setState({comments: comms});
  }

  render(){
    return(
      <div>
        {
          <CommentForm handleComment={this.handleComment} handleSubmit={this.handleSubmit} comment={this.state.comment}/>
        }
        <h4>Comments</h4>
        <div className="CommentList">
          {
            this.state.comments.map(c => {
              return(
                <div key={c.id} className="Comment">
                  <div className="CommentHeader">
                    <p className="CommentUsername">{c.username}</p>
                    <p className="CommentDate">{c.created_at}</p>
                  </div>
                  <p className="CommentContent">{c.content}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
