import { ADD_TODO, REMOVE_TODO, REQ_FAILED, REQ_START, REQ_SUCC, TOGGLE_ISCOMPLETED } from "./types";

export const todoReducer= (state=[], action) => {

  const {type, payload}= action;

  switch (type) {
    case ADD_TODO: 
      return state.concat(payload.todo)
    
    case REMOVE_TODO: 
      return state.filter( todo => todo._id !== payload)
    
    case TOGGLE_ISCOMPLETED: 
      return state.map( todo => (todo._id == payload._id) ? {...payload, isCompleted: payload.isCompleted} : todo )
    
    case REQ_SUCC: {
      return payload.data;
    }
    case REQ_START:
    case REQ_FAILED:
    default:
      return state;
  }

}

export const loadingReducer= (state=false, action) => {

  const {type}= action;

  switch (type) {
    case REQ_START:
      return true;
    case REQ_SUCC:
    case REQ_FAILED:
      return false;
    default:
      return state;
  }
}