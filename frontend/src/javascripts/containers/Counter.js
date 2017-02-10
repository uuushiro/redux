import React from 'react'
import { connect } from 'react-redux'
import { incrementCounter } from '../actions'
import { decrementCounter } from '../actions'


let Counter = ({counter, dispatch}) => (
    <div>
        <div>{counter}</div>
        <button onClick={() => dispatch(incrementCounter)}>プラス</button>
        <button onClick={() => dispatch(decrementCounter())}>マイナス</button>
    </div>
)

function mapStatetoProps(state) {
    return {counter: state.counter}
}

Counter = connect(mapStatetoProps)(Counter)

export default Counter