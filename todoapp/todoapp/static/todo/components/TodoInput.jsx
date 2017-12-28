import React, { Component } from 'react'
import axios from 'axios'

class TodoInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }

    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleAddClick(event) {
    
    // this.props.onAddTodo({ title: this.state.title, status: 'Doing' })
    // this.setState({ title: '' })
  }

  handleInputChange(event) {
    this.setState({ title: event.target.value })
  }

  render() {
    return (
      <div className="field has-addons is-pulled-left">
        <p className="control">
          <input className="input" type="text" placeholder="what I need to do?" onChange={this.handleInputChange}
            value={this.state.title}/>
        </p>
        <p className="control">
          <button className="button is-info" type="button" onClick={this.handleAddClick}>
            <i className="fa fa-plus"></i> Add
          </button>
        </p>
      </div>
    )
  }
}

export default TodoInput