import * as types from './types'

export const addTodo = (todo) => {
    return {
        type: types.ADD_TODO,
        todo
    }
}

export const toggleTodo = (todo) => {
    return {
        type: types.TOGGLE_TODO,
        todo
    }
}

export const toggleFilter = (filter) => {
    return {
        type: types.TOGGLE_FILTER,
        filter
    }
}