import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList({ searchQuery, cartCount, setCartCount }) {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (filteredProducts.length == 0) {
    return <p>No products found....</p>;
  }
  return (
    <main className="product-list">


      <div>
        <p>
          {" "}
          <b>Product Count: </b> Showing {filteredProducts.length} Products
        </p>
      </div>

      {filteredProducts.map((item) => (
        <ProductCard
          key={item.id}
          url={item.image}
          title={item.title}
          price={item.price}
          inStock={item.inStock}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
      ))}
    </main>
  );
}
