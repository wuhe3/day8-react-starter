import {useState} from "react";
import CounterGroupGenerator from "./CouterGroupGenerator";

const MultipleCounter = (props) => {
    const [size, setSize] = useState(0);

    return (
        <div>
            <CounterGroupGenerator size={size} setSize={setSize}></CounterGroupGenerator>
        </div>
    )
}

export default MultipleCounter;