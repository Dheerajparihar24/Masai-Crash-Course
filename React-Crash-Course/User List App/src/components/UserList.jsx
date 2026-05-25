import UserCard from "./UserCard";

export default function UserList({ users, searchQuery }) {
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (filteredUsers.length === 0) {
    return <h2>No users found.</h2>;
  }
  return (
    <section className="user-list">
      {filteredUsers.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          company={user.company.name}
        />
      ))}
    </section>
  );
}
