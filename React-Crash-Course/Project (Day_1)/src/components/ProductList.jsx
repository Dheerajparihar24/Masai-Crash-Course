import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <main className="product-list">
      {products.map((item, index) => (
        <ProductCard
          key={item.id}
          url={item.image}
          title={item.title}
          price={item.price}
          inStock={item.inStock}
        />
      ))}
    </main>
  );
}
