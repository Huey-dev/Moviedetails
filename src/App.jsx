import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch({type:'INC'})
  }
  const decrement = () => {
    dispatch({type:'DEC'})
  }
  const addValue = () => {
    dispatch({type:'ADD', payload: 10})
  }
  return (
   <div>
    <h1>Counter app</h1>
    <h2>{counter}</h2>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    <button onClick={addValue}>add</button>
   </div>
  )
}

export default App