import Counter from "./Counter";
import {useState, useEffect} from "react";

const CounterGroup = ({size, setSum}) => {
    const [counterValues, setCounterValues] = useState({});

    const updateCounterValue = (id, value) => {
        setCounterValues(prev => ({
            ...prev,
            [id]: value
        }));
    };

    useEffect(() => {
        const sum = Object.values(counterValues).reduce((a, b) => a + b, 0);
        setSum(sum);
    }, [counterValues, setSum]);

    return (
        <div className={"counter-group-wrapper"}>
            {Array.apply(null, { length: size }).map((e, i) => (
                <Counter
                    id={`counter${i}`}
                    key={`counter${i}`}
                    onValueChange={updateCounterValue}
                />
            ))}
        </div>
    )
}

export default CounterGroup;