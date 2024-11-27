import {useState} from "react";

const CounterGroupGenerator = ({size, onReset}) => {
    const [inputSize, setInputSize] = useState(size);

    const handleChange = (event) => {
        let newSize = event.target.value;

        if (newSize > 20) {
            newSize = 20;
        }

        if (newSize < 0) {
            newSize = 0;
        }

        setInputSize(newSize);
    };

    const handleReset = () => {
        onReset(inputSize);
    };

    return (
        <div>
            <input min={0} max={20} type="number" value={inputSize} onChange={handleChange}/>
            <button onClick={handleReset}>reset</button>
        </div>
    );
};

export default CounterGroupGenerator;