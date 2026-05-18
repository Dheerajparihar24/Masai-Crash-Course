export default function ProductCard({ url, title, price }) {
  return (
    <div className="product-card">
      <img src={url} alt={title} width="150" />
      <h3>{title}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}
