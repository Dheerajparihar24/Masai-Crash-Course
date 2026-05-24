export default function UserCard({ name, email, company }) {
  return (
    <div className="user-card">
      <p>
        <strong>Name: </strong> {name}
      </p>
      <p>Email: {email}</p>
      <p>Company : {company}</p>
    </div>
  );
}
