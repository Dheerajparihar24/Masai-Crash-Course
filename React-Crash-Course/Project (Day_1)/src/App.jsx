// import heroImg from './assets/hero.png'
import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <HeroSection />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <section className="Category-filter">
        Category Filter:
        <select name="" id="">
          <option value="All">All</option>
          <option value="watch">Watch</option>
          <option value="Electronics">Electronics</option>
          <option value="Audio">Audio</option>
        </select>
      </section>
      <ProductList searchQuery={searchQuery} setCartCount={setCartCount} />
    </>
  );
}

export default App;
