import { ADD_TODO, REMOVE_TODO, TOGGLE_ISCOMPLETED, REQ_START, REQ_SUCC, REQ_FAILED } from "./types"


//actions for todos
export const addTodo = (todo) => (
  {
    type: ADD_TODO,
    payload: {todo}
  }
);

export const removeTodo = (id) => (
  {
    type: REMOVE_TODO,
    payload: id
  }
);

export const toggleIscompleted = (data) => (
  {
    type: TOGGLE_ISCOMPLETED,
    payload: data
  }
);


//actions for request
export const reqStart = () => (
  {
    type: REQ_START
  }
);

export const reqSucc = (data) => (
  {
    type: REQ_SUCC,
    payload: {data}
  }
);

export const reqFailed = () => (
  {
    type: REQ_FAILED,
  }
);

