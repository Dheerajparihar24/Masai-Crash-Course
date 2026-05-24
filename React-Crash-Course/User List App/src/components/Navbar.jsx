export default function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav>
      <h2>User List app</h2>
      <input
        type="text"
        placeholder="Search user by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </nav>
  );
}
