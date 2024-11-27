import {useState} from "react";

const CounterGroupGenerator = () => {
    const [size, setSize] = useState(0);

    const handleChange = (event) => {
        // event is a wrapper, target is the input element, value is the value of the target
        setSize(event.target.value);
    };

    const handleReset = () => {
        setSize(0);
    }

    return (
        <div>
            <span>Size: {size}</span>
            <input min={0} max={20} type="number" value={size} onChange={handleChange}/>
            <button onClick={handleReset}>reset</button>
        </div>
    )

}
export default CounterGroupGenerator;








