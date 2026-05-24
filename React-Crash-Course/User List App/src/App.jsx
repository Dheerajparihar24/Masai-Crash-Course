import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import Navbar from "./components/Navbar";

function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <UserList users={users} searchQuery={searchQuery} />
    </>
  );
}

export default App;
