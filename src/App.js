import './App.css';
import ProductCategory from "./components/ProductCategory";
import Counter from "./components/Counter";
import CouterGroupGenerator from "./components/CouterGroupGenerator";
import MultipleCounter from "./components/MultipleCounter";

function App() {
    return (
        <div className="App">
            {/*<Counter></Counter>*/}
            {/*<CouterGroupGenerator></CouterGroupGenerator>*/}
            <MultipleCounter></MultipleCounter>
        </div>
    );
}

export default App;