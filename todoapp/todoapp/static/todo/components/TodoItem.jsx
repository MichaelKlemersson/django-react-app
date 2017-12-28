import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.title = props.todo.title
    this.state = {
      isSelected: false
    }
    this.isSelected = this.state.isSelected
    this.cssClass = () => {
      let classes = ['panel-block']
      if (this.state.isSelected) {
        classes.push('is-active')
      }
      return classes.join(' ')
    }

    this.initListeners()
  }
  
  initListeners() {
    this.handleOnChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.setState({isSelected: event.target.checked})
  }

  render() {
    return (
      <label className={this.cssClass()}>
        <span className="panel-icon">
          <input type="checkbox" name="todos[]" onChange={this.handleOnChange}/>
        </span>
        { this.title }&nbsp;
        <span className={"tag is-" + (this.props.todo.status === 'Done' ? 'success' : 'info')}>{this.props.todo.status}</span>
      </label>
    )
  }
}

export default TodoItem