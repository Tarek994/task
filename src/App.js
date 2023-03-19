import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Product from "./components/products/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Product />
    </div>
  );
}

export default App;
