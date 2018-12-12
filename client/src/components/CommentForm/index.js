import React from 'react';

function CommentForm(props){
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

export default CommentForm;
