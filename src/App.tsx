import './App.css'
import {useState} from "react";

function App() {

    let [counter, setCounter] = useState(0);
    return (
        <>
            <h2>{counter}</h2>
            <button onClick={() => {
              setCounter(++counter);
            }}>increment
            </button>
            <button onClick={() => {
               setCounter(--counter);
            }}>decrement
            </button>
        </>
    )
}

export default App
