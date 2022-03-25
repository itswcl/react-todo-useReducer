import './App.css';
import React, { useReducer, useState } from 'react'
import Todo from './Todo';

// export the action list for child used
export const ACTION = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DEL_TODO: 'del-todo'
}

const reducer = (todos, action) => {
  // each case we need to use entire state of array
  switch (action.type) {
    case ACTION.ADD_TODO:
      // copy entire list of todos and and add todo with newTodo function
      // giving back with {id: number, name: name, complete: false}
      return [...todos, newTodo(action.payload.name)];

    case ACTION.TOGGLE_TODO:
      return todos.map((todo) => {
        // find the target todo where we click from Todo component
        if (todo.id === action.payload.id) {
          // spread out the todo and update complete to opposite
          return { ...todo, complete: !todo.complete }
        }
        // if no id found just return the default
        return todo;
      })

    case ACTION.DEL_TODO:
      // return todo list whatever the id is not same as what we pass from
      // the onclick on todo component
      return todos.filter((todo) => todo.id !== action.payload.id)
    default:
      return todos;
  }
}

// helper function to pass name in and create new todo
const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false }
}

function App() {
  const [name, setName] = useState("")
  const [todos, dispatch] = useReducer(reducer, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // the name coming from the input name state
    // pass the action and payload which is the name in this case
    dispatch({ type: ACTION.ADD_TODO, payload: { name: name } })
    // reset the name input field
    setName("")
  }

  // console.log(todos)

  return (
    <div className="App">
      {/* once submitted we run the dispatch with the input name */}
      <form onSubmit={handleSubmit}>
        {/* update the name state on change */}
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <button>Submit</button>
      </form>
      {
        // we print out entire list with todos.map
        // each todo we return a Todo component
        // and we pass the id as KYE and todo as todo
        // most important the dispatch function to child
        todos.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
          )
        })
      }
    </div>
  );
}

export default App;
