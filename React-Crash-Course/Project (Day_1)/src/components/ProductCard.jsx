export default function ProductCard({
  url,
  title,
  price,
  inStock,
  cartCount,
  setCartCount,
}) {
  const handleCartCount = () => {
    if(inStock){
      setCartCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="product-card">
      <img src={url} alt={title} width="150" />
      <h3>{title}</h3>
      <p>Price: ₹{price}</p>
      <p>{inStock ? "In a Stock" : "Out of Stock"}</p>
      <button onClick={handleCartCount} className="addToCartBtn" disabled={!inStock}>
        Add To Cart
      </button>
    </div>
  );
}
