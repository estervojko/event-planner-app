import React, {Component} from 'react';
import ReactModal from 'react-modal';
import './index.css'

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalClicked: true
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({showModal: true});
  }

  handleCloseModal() {
    this.setState({showModal: false});
  }

  render() {
    return (<div>
      <button onClick={this.handleOpenModal}>Add Event</button>
      <ReactModal isOpen={this.state.showModal}>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Title
            <input type="text" name="title" value={this.props.event.title} onChange={this.props.handleChange}/>
          </label>
          <br></br>
          <label>
            Description
            <input type="text" name="description" value={this.props.event.description} onChange={this.props.handleChange}/>
          </label>
          <br></br>
          <label>
            Start Date
            <input type="date" name="start_date" value={this.props.event.start_date} onChange={this.props.handleChange}/>
          </label>
          <br></br>
          <label>
            End date
            <input type="date" name="end_date" value={this.props.event.end_date} onChange={this.props.handleChange}/>
          </label>
          <br></br>
          <label>
            Address
            <input type="text" name="address" value={this.props.event.address} onChange={this.props.handleChange}/>
          </label>
          <br></br>
          <label>
            Image URL
            <input type="text" name="img" value={this.props.event.img} onChange={this.props.handleChange}/>
          </label>
          <button onClick={this.props.handleSubmit}>Post</button>
        </form>
        <button onClick={this.handleCloseModal}>Close Modal</button>
      </ReactModal>
    </div>)
  }
}
