import './App.css';
import React, { useReducer, useState } from 'react'

const ACTION = {
  ADD_TODO: 'add-todo'
}

const reducer = () => {

}

function App() {
  const [name, setName] = useState("")
  const [state, dispatch] = useReducer(reducer, [])

  const handleSubmit = (e) => {
    e.preventDefault()

  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
