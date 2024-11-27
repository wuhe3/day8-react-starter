import {useState} from "react";
import CounterGroupGenerator from "./CouterGroupGenerator";
import CounterGroup from "./CounterGroup";

const MultipleCounter = () => {
    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);

    return (
        <div>
            <CounterGroupGenerator size={size} setSize={setSize}></CounterGroupGenerator>
            <div>Sum: {sum}</div>
            <CounterGroup size={size} setSum={setSum}/>
        </div>
    )
}

export default MultipleCounter;