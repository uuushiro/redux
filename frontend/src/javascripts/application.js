import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import * as actions from './actions'
import  App from './components/App'

const initialState = {
    visibilityFilter: 'SHOW_ALL',
    todos: [
        {
            text: 'Reduxのお勉強',
            completed: true
        },
        {
            text: 'なんとなく把握',
            completed: false
        }
    ]
};

const store = createStore(todoApp, initialState)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('container')
);