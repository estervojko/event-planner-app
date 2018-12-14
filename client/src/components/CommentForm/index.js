import React, { Component } from 'react';

export default class CommentForm extends Component{
  constructor(props){
    super(props);
  }

  handleChange(){

  }

  handleSubmit(){

  }

  render(){
    return(
      <form onSubmit={props.handleSubmit}>
        <label>
          Text
          <input type="text"
                 name={props.id}
                 value={props.commentText}
                 onChange={props.handleComments}/>
        </label>
        <button onClick={props.handleSubmit}>Post</button>
      </form>
    )
  }
}
