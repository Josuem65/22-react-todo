export { default as exampleState } from './example'
// // import { useList } from './'   CREATE FILE FOR THIS
// //THIS IS THE ONE
// // import { useSelector, useDispatch } from 'react-redux'
// // import axios from 'axios'

// // // 2. action definitions
// const CHANGE_TEXT = 'example/EXAMPLE_SYNC'
// // const EXAMPLE_ASYNC = 'example/EXAMPLE_ASYNC'


// //State for the textInput.
// export default () => {
//   const { list, addList } = useList()
//   const [inputText, setInputText] = useState('')
//   function handleSubmit(e) {
//     // e.preventDefault()
//     addList(inputText)
//     setInputText('')
//   }
//   return {
//     <div>
//       <form onSubmit={handleSubmit}>
//        <input
//         value={inputText}
//         text="text"
//         onChange={(e) => setInputText(e.target.value)}
//         />
//       </form>
//       // {list.map((color) => (
//       //   <List />
//       // ))}
//     </div>
//   }
// }
// //Formula for the list items with unique keys

// const initialState = {
//     textInput: null,
//     list: [],
//   }

// // // 4. reducer
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case CHANGE_TEXT:
//       return {
//         ...state,
//         list: action.payload,
//       } 
//       default: state
// //     case EXAMPLE_SYNC:
// //       return {
// //         ...state,
// //         example: action.payload,
// //       }
// //     default:
// //       return state
//   }
// }

// export default (state = initialState, action) => {
//     switch (action.type) {
//       case EXAMPLE_ASYNC:
//         return {
//           ...state,
//           list: action.payload,
//         }
//       case EXAMPLE_SYNC:
//         return {
//           ...state,
//           userText: action.payload,
//         }
//       default:
//         return state
//     }
//   }

// // // 5. action creators
// // // async action...
// // function doExample(text) {
// //   return {
// //     type: EXAMPLE_SYNC,
// //     payload: text,
// //   }
// // }

// function makeList() {
//   return {
//     type: CHANGE_TEXT,
//     payload: id,
//   }
// }

// // // 5. async action...
// // function doExampleAsync() {
// //   return (dispatch) => {
// //     setTimeout(() => {
// //       dispatch({ type: EXAMPLE_ASYNC, payload: ['foo', 'bar', 'baz'] })
// //     }, 5000)
// //   }
// // }

// // 6. custom hook
// export function useList() {
//   const dispatch = useDispatch()
//   const list = useSelector((app) => app.listState.list)
//   const addLis = (text) => dispatch(makeList(text))
//   // const exampleAsync = () => dispatch(doExampleAsync())
//   return {
//     example,
//     setExample,
//     list,
//   }
// }