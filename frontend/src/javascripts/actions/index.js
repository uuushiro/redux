let nextTodoId = 0

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}


export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}



export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}


export function incrementCounter() {
    return { type: 'INCREMENT_COUNTER' }
}

export function decrementCounter() {
    return { type: 'DECREMENT_COUNTER' }
}