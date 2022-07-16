import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../thunks';
import { useSelector } from 'react-redux';

export default function ListItem({todo}) {

const state = useSelector((state) => state.todoReducer);
const dispatch = useDispatch();

function toggleClass(e) {
  e.target.classList.toggle("completed")
}

  return (
    <div className='todo-item-container'>
        <div className='todo-text'  
        onClick={(e)=>{
          dispatch(updateTodo(todo));
          toggleClass(e)
        }} > {todo.text} </div>
        <button className='remove-button' onClick={() => {dispatch(deleteTodo(todo._id))}} >Remove</button>
    </div>
  )
}
