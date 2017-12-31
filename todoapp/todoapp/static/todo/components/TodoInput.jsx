import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
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
    axios.post('/api/todos/', { title: this.state.title }).then(response => response.data).then(data => {
      this.props.onAddTodo(data)
      this.setState({ title: '' })
    })
  }

  handleInputChange(event) {
    this.setState({ title: event.target.value })
  }

  render() {
    return (
      <div className="field has-addons" style={{"width": "100%"}}>
        <p className="control" style={{"width": "100%"}}>
          <input className="input" type="text" placeholder="what I need to do?" onChange={this.handleInputChange}
            value={this.state.title}/>
        </p>
        <p className="control">
          <button className="button is-info" type="button" onClick={this.handleAddClick}
            disabled={this.state.title.trim() == ''}>
            <i className="fa fa-plus"></i> Add
          </button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: todo => {
      dispatch(addTodo(todo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)