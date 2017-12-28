import React, { Component } from 'react'
import TodoInput from './TodoInput'

class TodoHeader extends Component {
  constructor(props) {
    super(props)

    this.handleRemoveClick = this.handleRemoveClick.bind(this)
    this.handleOnAddTodo = this.handleOnAddTodo.bind(this)
  }

  handleRemoveClick(event) {

  }

  handleOnAddTodo(todo) {
    console.log(todo)
    this.props.onAddTodo(todo)
  }

  render() {
    return (
      <div className="panel-block is-clearfix" style={{display: "block"}}>
        <TodoInput onAddTodo={this.handleOnAddTodo}/>

        <div className="is-pulled-right">
          <button className="button is-danger level-item" onClick={this.handleRemoveClick}>teste</button>
        </div>
      </div>
    )
  }
}

export default TodoHeader