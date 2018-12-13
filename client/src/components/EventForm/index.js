import React from 'react';
import './index.css'

function EventForm(props){
  return(
    <form onSubmit={props.handleSubmit}>
      <label>
        Title
        <input type="text"
               name="title"
               value={props.articleFormData.title}
               onChange={props.handleChange}/>
      </label>
      <br></br>
      <label>
        Description
        <input type="text"
              name="description"
              value={props.articleFormData.description}
              onChange={props.handleChange}/>
      </label>
      <br></br>
      <label>
        Start Date
        <input type="text"
              name="start_date"
              value={props.articleFormData.start_date}
              onChange={props.handleChange}/>
      </label>
      <br></br>
      <label>
        End date
        <input type="text"
              name="article"
              value={props.articleFormData.end_date}
              onChange={props.handleChange}/>
      </label>
      <br></br>
      <label>
        Address
        <input type="text"
              name="article"
              value={props.articleFormData.address}
              onChange={props.handleChange}/>
      </label>
      <button onClick={props.handleSubmit}>Post</button>
    </form>
  )
}

export default EventForm;
