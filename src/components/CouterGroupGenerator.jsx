import {useState} from "react";

const CounterGroupGenerator = (props) => {
    const [size, setSize] = useState(props.size);

    const handleChange = (event) => {
        // event is a wrapper, target is the input element, value is the value of the target
        setSize(event.target.value);
    };

    const handleReset = () => {
        props.setSize(size);
    }

    return (
        <div>
            <span>Size: {props.size}</span>
            <input min={0} max={20} type="number" value={size} onChange={handleChange}/>
            <button onClick={handleReset}>reset</button>
        </div>
    )

}
export default CounterGroupGenerator;






