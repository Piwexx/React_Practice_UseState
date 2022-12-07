import React,{useState} from 'react'

export const ConditionalApp = () => {
    const [condition,setCondition] = useState(true)

  return (
          <>
            <h1>ConditionalApp</h1>
            <button onClick={() => setCondition(!condition)}>Toggle</button>
            {
               // condition ? <p>Es true</p> : <p>Es False</p>
               condition && <p>Es true</p>
            }
        </>
  )
}
