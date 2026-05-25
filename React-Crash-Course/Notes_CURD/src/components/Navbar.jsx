function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav>
      <h2>Notes App</h2>
      <input
        type="text"
        placeholder="Search note..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </nav>
  );
}

export default Navbar;
