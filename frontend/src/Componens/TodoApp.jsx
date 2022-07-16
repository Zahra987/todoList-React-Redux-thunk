import React, { useEffect } from 'react';
import TodoForm from './TodoForm';
import ListItem from './ListItem';
import {useDispatch, useSelector} from 'react-redux';
import { loadTodos } from '../thunks';

export default function TodoApp() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const todos = state.todoReducer;
  const isLoading = state.loadingReducer;

  useEffect(() => {
    dispatch(loadTodos())
  },[]);

  const loading = <h2>Loading...</h2>;
  const content = (<div className='list-wrapper'>
  <h1>Todo List</h1>
  <TodoForm/>
  {todos.map((todo,index)=><ListItem todo={todo}  key={index} />)}
</div>);
  return isLoading ? loading : content;
  
}
