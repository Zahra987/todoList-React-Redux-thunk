import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from '../thunks';
export default function TodoForm() {

  const dispatch = useDispatch();
  const [inputValue,setInputValue] = useState('');
  const inputRef = useRef();

  function refFunction(){
    inputRef.current.focus();
  }

  useEffect(() => {
    refFunction();
  })

  return (
    <div className='todo-form'>
      <input ref={inputRef} onChange={(e)=>{setInputValue(e.target.value)}} className='todo-input' type='text' value={inputValue} placeholder='type new todo here'/>
      <button className='todo-button' 
      onClick={() => {
        dispatch(createTodo(inputValue));
        refFunction();
        setInputValue("");
        }} >Create Todo</button>
    </div>
  )
}
