export { default as exampleState } from './example'
//THIS IS THE ONE
// import { useSelector, useDispatch } from 'react-redux'
// import axios from 'axios'

// // 2. action definitions
// const EXAMPLE_SYNC = 'example/EXAMPLE_SYNC'
// const EXAMPLE_ASYNC = 'example/EXAMPLE_ASYNC'

const EXAMPLE_SYNC = 'example/EXAMPLE_SYNC'
const EXAMPLE_ASYNC = 'example/EXAMPLE_ASYNC'
//State for the textInput.
export default () => {
  const { list, addList } = useList()
  const [inputText, setInputTexts] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    addList(inputText)
    setInputText('')
  }
  return {
    <div>
      <form onSubmit={handleSubmit}>
      <input
        vlaue={inputText}
        text="text"
        onChange={(e) => setInputText(e.target.value)}
        />
      </form>
      {boxes.map((color) => (
        <Box color={color} foo={true} />
      ))}
    </div>
  }
}
//Formula for the list items with unique keys

// // 3. initial state
// const initialState = {
//   example: null,
//   list: [],
// }
const initialState = {
    textInput: null,
    list: [],
  }

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

export default (state = initialState, action) => {
    switch (action.type) {
      case EXAMPLE_ASYNC:
        return {
          ...state,
          list: action.payload,
        }
      case EXAMPLE_SYNC:
        return {
          ...state,
          userText: action.payload,
        }
      default:
        return state
    }
  }

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