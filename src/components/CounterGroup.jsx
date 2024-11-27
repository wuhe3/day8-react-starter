import Counter from "./Counter";
import {useState} from "react";

const CounterGroup = ({size, setSum}) => {
    const [counterValues, setCounterValues] = useState({});

    const updateCounterValue = (id, value) => {
        setCounterValues(prev => ({
            ...prev,
            [id]: value
        }));
    };

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