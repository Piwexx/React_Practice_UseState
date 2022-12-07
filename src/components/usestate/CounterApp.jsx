import { React,useState } from "react"


// UseState
  export const CounterApp = () =>{
        const [counter,setCounter] = useState(0)

        const incrementCounter = ()=>{
            setCounter(counter+1)
        }

        return (
            <>
            <button onClick={incrementCounter}>Ingrement</button>
            <h1>Clicks: {counter}</h1>
            </>
        )
}  

