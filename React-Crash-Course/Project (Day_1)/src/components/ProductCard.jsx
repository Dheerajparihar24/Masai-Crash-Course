export default function ProductCard({ url, title, price , inStock}) {
  return (
    <div className="product-card">
      <img src={url} alt={title} width="150" />
      <h3>{title}</h3>
      <p>Price: ₹{price}</p>
      <p>{inStock? "In a Stock" : "Out of Stock"}</p>
      <button className="addToCartBtn">Add To Cart</button>
    </div>
  );
}
