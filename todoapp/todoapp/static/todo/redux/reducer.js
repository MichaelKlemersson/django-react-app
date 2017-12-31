import * as types from './types'
import * as actions from './actions'

const initialState = {
    todos: [],
    activeFilter: types.FILTERS.ALL
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FILTER:
            return Object.assign({}, state, { activeFilter: action.filter })
            break;

        case types.ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    action.todo
                ]
            })
            break;
        
        case types.TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if (todo.id === action.todo.id) {
                        return Object.assign({}, todo, {
                            status: todo.status === types.FILTERS.DONE ? types.FILTERS.DOING : types.FILTERS.DONE
                        })
                    }
                    return todo
                })
            })
            break;
    }

    return state
}

export default reducer