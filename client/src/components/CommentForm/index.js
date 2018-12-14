import React, { Component } from 'react';

export default class CommentForm extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Content
          <input type="text"
                 name="content"
                 value={this.props.comment.content}
                 onChange={this.props.handleComment}/>
        </label>
        <br></br>
        <label>
          Date
          <input type="date"
                 name="date"
                 value={this.props.comment.date}
                 onChange={this.props.handleComment}/>
        </label>
        <button onClick={this.props.handleSubmit}>Post</button>
      </form>
    )
  }
}
