import React, {useState, useEffect} from 'react'
import { useExample } from "../hooks";
export default () => {
  // const { example, setExample, exampleAsync, list } = useExample()

  const [todoText, setTodoText] = useState("");
  const {
    // todos,
    addTodo,
    deleteTodo,
    completeTodo,
    list,
    // example,
  } = useExample();

  useEffect(() => {
    completeTodo();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // addTodo(todoText);
    // console.log(input.value)
    // if(input.value)
    addTodo(todoText);
    setTodoText("");
  }

  function handleComplete(id) {
    completeTodo(id)
  }

  return (
    <div className="container">
      <h1 className="todoTitle">todos</h1>
      <div className="TodoList">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="what needs to be done?"
          />
        
        </form>
        <ul>
          {list.map((item) => {
            return (
              <li className="listItem">
                <input
                  type="checkbox"
                  onClick={() => handleComplete(item.id)}
                ></input>
                <span className={item.completed === true ? 'completed' : ''}>{item.text}</span>
                {console.log(item)}
                <button className="delete" onClick={() => deleteTodo(item.id)}>x</button>
                <hr></hr>
                <div className="todoStats">
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};


// import React from 'react'
// import { useExample } from '../hooks'
// export default () => {
//   const { example, setExample, exampleAsync, list } = useExample()
//   return (
//     <div>
//       <input className="mainInput" placeholder="What needs to be done?"/>
//       <h2>{example}</h2>
//       <button onClick={() => setExample('foo')}>Example sync</button>
//       <button onClick={exampleAsync}>Example async</button>
//       <ul>
//         {list.map((item) => (
//           <li>{item}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }