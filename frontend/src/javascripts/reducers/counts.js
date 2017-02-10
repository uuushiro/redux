function counter(state ={counter:0}, action) {
    switch(action.type) {
        case 'INCREMENT_COUNTER':
            return {counter: state + 1}
        case 'DECREMENT_COUNTER':
            return {counter: state - 1}
        default:
            return state
    }
}

export default counter