import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

//Action
function incrementCounter() {
    return { type: 'INCREMENT_COUNTER' }
}

function decrementCounter() {
    return { type: 'DECREMENT_COUNTER' }
}
//Reducer
function counter(state = {counter: 0}, action) {
    switch(action.type) {
        case 'INCREMENT_COUNTER':
            return {counter: state.counter + 1};
        case 'DECREMENT_COUNTER':
            return {counter: state.counter - 1};
        default:
            return state
    }
}

render(
    <h1>Hello Redux</h1>,
    document.getElementById('container')
);