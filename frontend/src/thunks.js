import {reqStart, reqSucc, reqFailed, addTodo, removeTodo, toggleIscompleted} from './actions'

export const loadTodos = () => async (dispatch, getState) => {

  try{
    dispatch(reqStart());
  const response = await fetch('http://localhost:3000/todos')
  const allData = await response.json();
  const todos = allData.data;
  dispatch(reqSucc(todos));
  } catch (e) {
    dispatch(reqFailed());
    dispatch(errAlert(e));
  }
}

export const createTodo = (text) => async (dispatch) => {
  try{
    const body = JSON.stringify({text, isCompleted: false});
    const response = await fetch('http://localhost:3000/todos', {
    headers: {
      'Content-Type' : 'application/json'
    },
    method: 'post',
    body
  });
  const allData = await response.json();
  dispatch(addTodo(allData.data));
  } catch(e) {
    dispatch(errAlert(e))
  }
}

export const updateTodo = (todo) => async (dispatch) => {
  try{
    
    const response = await fetch(`http://localhost:3000/todos/${todo._id}`, {
    headers: {
      'Content-Type' : 'application/json'
    },
    method: 'put',
    body: JSON.stringify({"isCompleted": todo.isCompleted })
  });
  const allData = await response.json();
  const data = allData.data;
  dispatch(toggleIscompleted(data));
  } catch(e) {
    dispatch(errAlert(e))
  }
}



export const deleteTodo = (id) => async dispatch => {
  try{
    const response = await fetch(`http://localhost:3000/todos/${id}`,{
      method: 'delete'
    });
  const allData = await response.json();
  const todo = allData.data;
  dispatch(removeTodo(todo._id));
  } catch(e) {
    dispatch(errAlert(e));
  }
}






const errAlert = () => (e) => {
  alert(`ERROR ${e}`);
}