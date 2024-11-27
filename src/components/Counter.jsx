import {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(10);

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(0);
    }

    return (
        <div>
            <div>
                <button onClick={increase}>+</button>
            </div>
            <div>
                <button onClick={decrease}>-</button>
            </div>
            <div>
                <button onClick={reset}>reset</button>
            </div>
            <div>{counter}</div>
        </div>
    )

}

export default Counter;








