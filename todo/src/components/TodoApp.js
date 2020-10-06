import React from 'react'
import { useExample } from '../hooks'
export default () => {
  const { example, setExample, exampleAsync, list } = useExample()
  return (
    <div>
      <input placeholder="What needs to be done?"/>
      {/* <h2>{example}</h2> */}
      <input className="mainInput" placeholder="What needs to be done?" onSubmit={() => setExample(document.getElementsByClassName('.mainInput').value)}/>
      <button onClick={exampleAsync}>Example async</button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}


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