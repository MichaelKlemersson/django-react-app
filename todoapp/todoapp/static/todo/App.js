import React, { Component } from 'react'
import TodoList from 'App/components/TodoList'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TodoList />
        )
    }
}

export default App