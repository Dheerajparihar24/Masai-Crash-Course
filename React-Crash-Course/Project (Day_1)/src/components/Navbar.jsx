function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">LOGO</div>

      {/* <div className="search-bar">
        <input type="text" placeholder="Search products..." />
      </div> */}

      <div className="navbar-menu">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
