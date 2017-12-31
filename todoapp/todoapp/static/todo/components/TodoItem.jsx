import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as types from '../redux/types'
import { toggleTodo } from '../redux/actions'
import axios from 'axios'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.isSelected = false
    
    this.title = props.todo.title
    this.cssClass = () => {
      let classes = ['panel-block']
      if (this.isSelected) {
        classes.push('is-active')
      }
      return classes.join(' ')
    }

    this.handleOnChange = this.onChange.bind(this)
  }

  onChange() {
    axios.patch('/api/todos/' + this.props.todo.id + '/', {
      'status': this.props.todo.status === types.FILTERS.DOING ? types.FILTERS.DONE : types.FILTERS.DOING
    }).then(response => response.data).then(data => {
      this.props.onTodoClick(this.props.todo)
    })
  }

  render() {
    return (
      <label className={this.cssClass()}>
        <span className="panel-icon">
          <input type="checkbox" name="todos[]" onChange={this.handleOnChange}
            checked={this.props.todo.status === types.FILTERS.DONE}/>
        </span>
        { this.title }&nbsp;
        <span className={"tag is-" + (this.props.todo.status === types.FILTERS.DONE ? 'success' : 'info')}>{this.props.todo.status}</span>
      </label>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: todo => {
      dispatch(toggleTodo(todo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)