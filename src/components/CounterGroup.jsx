import Counter from "./Counter";
import {useState} from "react";

const CounterGroup = ({size, setSum}) => {
    const [counterValues, setCounterValues] = useState({});

    return (
        <div className={"counter-group-wrapper"}>
            {Array.apply(null, { length: size }).map((e, i) => (
                <Counter id={`counter${i}`} key={`counter${i}`} />
            ))}
        </div>
    )
}

export default CounterGroup;