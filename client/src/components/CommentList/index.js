import React from 'react';
function CommentList(props){
    return(
      <div>
        {
          props.comments.map(c => {
            // console.log(a);
            return(
              <div key={c.id}>
                <p>{c.text}</p>
              </div>
            )
          })
        }
      </div>
    )
}


export default CommentList;
