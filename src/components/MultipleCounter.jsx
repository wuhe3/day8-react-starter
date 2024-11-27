import {useState} from "react";
import CounterGroupGenerator from "./CouterGroupGenerator";
import CounterGroup from "./CounterGroup";

const MultipleCounter = () => {
    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);
    const [resetKey, setResetKey] = useState(0);

    const handleReset = (newSize) => {
        setSize(newSize);
        setSum(0);
        setResetKey(prev => prev + 1);
    };

    return (
        <div>
            <CounterGroupGenerator
                size={size}
                onReset={handleReset}
            ></CounterGroupGenerator>
            <div>Sum: {sum}</div>
            <CounterGroup
                key={resetKey}
                size={size}
                setSum={setSum}
            />
        </div>
    )
}

export default MultipleCounter;