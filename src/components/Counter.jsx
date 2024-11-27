import {useState} from "react";
import "./Counter.css";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

    return (
        <div className={"counter-wrapper"}>
            <button onClick={increase}>+</button>
            <span>{counter}</span>
            <button onClick={decrease}>-</button>
        </div>
    )

}

export default Counter;








