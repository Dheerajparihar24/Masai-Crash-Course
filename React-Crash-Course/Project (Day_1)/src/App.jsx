// import heroImg from './assets/hero.png'
import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchBar />
      <ProductList />
    </>
  );
}

export default App;
