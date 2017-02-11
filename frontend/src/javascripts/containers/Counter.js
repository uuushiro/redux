import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { incrementCounter } from '../actions'
import { decrementCounter } from '../actions'


let Counter = ({counter, incrementCount, decrementCount}) => {
    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => incrementCount()}>プラス</button>
            <button onClick={() => decrementCount()}>マイナス</button>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {counter: state.counter}
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: () => {
            dispatch(incrementCounter())
        },
        decrementCount: () => {
            dispatch(decrementCounter())
        }
    }
}

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter)

Counter.prototypes = {
    counter: PropTypes.number.isRequired,
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired
}

export default Counter