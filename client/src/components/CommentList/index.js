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
        user_id: jwtDecode(localStorage.getItem('token')).id,
        // username: jwtDecode(localStorage.getItem('token')).username,
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
    const comment = commentPosted.data
    const userId = comment.user_id
    const commentUser = await userReq.getUser(userId);
    console.log(commentUser)
    const username = commentUser.username
    Object.assign(comment, {username: username})

    this.setState((prevState) => ({comments: [...prevState.comments, comment].reverse()}));

  }


  // I am trying to pull the username for each comment from the users table, by looking at the user_id in the comments table
  async componentDidMount(){
    const event = this.props.event;
    const comments = await axios.get(`http://localhost:3000/events/${event.id}/comments`);
    console.log(comments.data)
    const comms = await Promise.all(comments.data.map( async c => {
        const userId = c.user_id
        const commentUser = await userReq.getUser(userId);
        console.log(commentUser)
        const username = commentUser.username
        Object.assign(c, {username: username})
        console.log(c);
        return c
      }))

    console.log("commentlist", comms);
    await this.setState({comments: comms});
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
                  <p>{c.username}</p>
                  <p>{c.created_at}</p>
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
