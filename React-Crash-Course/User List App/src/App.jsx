import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import Navbar from "./components/Navbar";

function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <UserList users={users} searchQuery={searchQuery} />
      )}
    </>
  );
}

export default App;
