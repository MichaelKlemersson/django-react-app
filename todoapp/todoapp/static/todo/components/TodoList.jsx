import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleFilter } from '../redux/actions'

import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    
    // this.state = {
    //   items: props.todos || [],
    //   activeFilter: 'All',
    //   currentItems: []
    // }

    this.handleFilter = this.applyFilter.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  // hooks
  // componentWillMount() {
  //   this.setState({
  //     currentItems: this.state.items.slice()
  //   })
  // }

  // methods
  addTodo(todo) {
    let todos = this.state.items.slice()
    let currentTodos = this.state.currentItems.slice()
    todo.id = todos.length + 1
    todos.push(todo)
    if (this.state.activeFilter === 'All' || todo.status === this.state.activeFilter) {
      currentTodos.push(todo)
    }
    this.setState({
      items: todos,
      currentItems: currentTodos
    })
  }

  listItems() {
    return this.props.todos.map((item, index) => {
      return <TodoItem key={item.id} todo={item}/>
    })
  }

  applyFilter(event) {
    this.props.onApplyFilter(event.target.dataset.filter)
    // const status = event.target.dataset.filter
    // const items = this.state.items.filter(item => {
    //   if (status !== 'All' && (item.status === status ) || status === 'All')
    //   return item
    // })
    // this.setState({ currentItems: items, activeFilter: status })
    // this.updateActiveFilter(event.target)
  }

  updateActiveFilter(target) {
    Array.prototype.forEach(element => {
      element.classList.value = element.classList.value.replace('is-active', '').trim()
    }, document.querySelectorAll('#todo-filters > .filter'))
    target.classList.value += ' is-active'
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="panel">
            <p className="panel-heading">Todo Django+React App</p>

            <TodoHeader onAddTodo={this.addTodo}/>

            <p className="panel-tabs" id="todo-filters">
              <a className="filter" data-filter="All" onClick={this.handleFilter}>All</a>
              <a className="filter" data-filter="Doing" onClick={this.handleFilter}>Doing</a>
              <a className="filter" data-filter="Done" onClick={this.handleFilter}>Done</a>
            </p>
            
            {this.listItems()}
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeFilter: state.activeFilter,
    todos: state.todos.filter(item => {
      if (state.activeFilter !== 'All' && (item.status === state.activeFilter) || state.activeFilter === 'All') {
        return item
      }
    })
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onApplyFilter: status => {
      dispatch(toggleFilter(status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)