import React, { Component } from 'react'
import TodoInput from './TodoInput'

class TodoHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="panel-block is-clearfix" style={{display: "block"}}>
        <TodoInput />
      </div>
    )
  }
}

export default TodoHeader