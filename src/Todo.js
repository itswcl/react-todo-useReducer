import React from 'react'
// pass the action object from the parent APP
import { ACTION } from './App'

const Todo = ({ todo, dispatch }) => {
    return (
        <div>
            {/* show the toggle difference */}
            {/* true return grey false black */}
            <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
                {todo.name}
            </span>

            {/* while onclick */}
            {/* we pass type and payload */}
            {/* payload as the todo.id pass from parent */}
            <button onClick={() => {
                dispatch({ type: ACTION.TOGGLE_TODO, payload: { id: todo.id } })
            }}>Toggle{todo.id}</button>

            <button onClick={() => {
                dispatch({ type: ACTION.DEL_TODO, payload: { id: todo.id } })
            }}>Delete</button>
        </div >
    )
}

export default Todo