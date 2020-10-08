
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// 2. action definitions
const ADD_TODO = "example/ADD_TODO";
const DELETE_TODO = "example/DELETE_TODO";
const COMPLETE_TODO = "example/COMPLETE_TODO";
// 3. initial state
const initialState = {
  example: null,
  list: [],
};

function generateId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, { id: generateId(), text: action.payload, completed: false }], // action.payload
      };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.payload ) {
            item.completed = !item.completed
          }
          return item
        }),
      };
      default:
        return state;
   }
};
// const listState = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(todo =>
//         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//       )
//     default:
//       return state
//   }
// }

// 5. action creators
// todo action...
function addTheTodo(text) {
  return {
    type: ADD_TODO,
    payload: text,
  };
}

// 5. delete action...
// function doExampleAsync() {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch({ type: DELETE_TODOS, payload: ["foo", "bar", "baz"] });
//     }, 5000);
//   };
// }

function deleteTheTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}

// function completeTheTodo() {
//   return (dispatch) => {
//     axios.get("/todos").then((resp) => {
//       dispatch({
//         type: COMPLETE_TODO,
//         payload: resp.data,
//       });
//     });
//   };
// }
function completeTheTodo(id) {
  let completed = ADD_TODO.completed
  if (completed === false) {
    return {
      completed: true,
      type: COMPLETE_TODO,
      payload: id,
    }
  } else {
    return {
      completed: false,
      type: COMPLETE_TODO,
      payload: id,
    }
  }
}

// 6. custom hook
export function useExample() {
  const dispatch = useDispatch();
  const example = useSelector((app) => app.exampleState.example);
  const list = useSelector((app) => app.exampleState.list);
  const addTodo = (text) => dispatch(addTheTodo(text));
  const deleteTodo = (id) => dispatch(deleteTheTodo(id));
  const completeTodo = (id) => dispatch(completeTheTodo(id));
  return {
    example,
    addTodo,
    deleteTodo,
    list,
    completeTodo,
  };
}

// // 1. imports
// import { useSelector, useDispatch } from 'react-redux'
// import axios from 'axios'

// // 2. action definitions
// const EXAMPLE_SYNC = 'example/EXAMPLE_SYNC'
// const EXAMPLE_ASYNC = 'example/EXAMPLE_ASYNC'

// // 3. initial state
// const initialState = {
//   example: null,
//   list: [],
// }

// // 4. reducer
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case EXAMPLE_ASYNC:
//       return {
//         ...state,
//         list: action.payload,
//       }
//     case EXAMPLE_SYNC:
//       return {
//         ...state,
//         example: action.payload,
//       }
//     default:
//       return state
//   }
// }

// // 5. action creators
// // async action...
// function doExample(text) {
//   return {
//     type: EXAMPLE_SYNC,
//     payload: text,
//   }
// }

// // 5. async action...
// function doExampleAsync() {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch({ type: EXAMPLE_ASYNC, payload: ['foo', 'bar', 'baz'] })
//     }, 5000)
//   }
// }

// // 6. custom hook
// export function useExample() {
//   const dispatch = useDispatch()
//   const example = useSelector((app) => app.exampleState.example)
//   const list = useSelector((app) => app.exampleState.list)
//   const setExample = (text) => dispatch(doExample(text))
//   const exampleAsync = () => dispatch(doExampleAsync())
//   return {
//     example,
//     setExample,
//     exampleAsync,
//     list,
//   }
// }
// 1. imports