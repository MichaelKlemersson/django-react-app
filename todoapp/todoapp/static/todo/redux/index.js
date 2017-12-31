import { createStore } from 'redux'
import reducer from './reducer'

const rootAppDomElement = document.getElementById('app-root')
const todos = JSON.parse(rootAppDomElement.dataset.todos)

export default createStore(reducer, {todos, activeFilter: 'All'})