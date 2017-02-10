import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'
import Counter from '../containers/Counter'

const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Counter/>
    </div>
)

export default App