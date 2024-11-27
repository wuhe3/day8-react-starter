import Counter from "./Counter";


const CounterGroup = (props) => {
    const size = props.size;

    return (
        <div className={"counter-group-wrapper"}>
            {Array.apply(null, { length: size }).map((e, i) => (
                <Counter id={`i${Math.random()}`} key={`i${Math.random()}`} />
            ))}
        </div>
    )
}


export default CounterGroup;