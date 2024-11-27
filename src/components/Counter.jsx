import {useState, useEffect} from "react";
import "./Counter.css";

const Counter = ({id, onValueChange}) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        onValueChange(id, counter);
    }, [counter, id, onValueChange]);

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);
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