import './App.css';
import ProductCategory from "./components/ProductCategory";
import Counter from "./components/Counter";
import CouterGroupGenerator from "./components/CouterGroupGenerator";

function App() {
    return (
        <div className="App">
            {/*<Counter></Counter>*/}
            <CouterGroupGenerator></CouterGroupGenerator>
        </div>
    );
}

export default App;