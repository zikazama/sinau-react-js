import { useEffect, useState } from "react";

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

  return (
    <div>
      <h1>Users Page</h1>
      {users.length > 0 ? users.map((user) => <p key={user.id}>{user.name}</p>) : 'Tidak ada data'}
    </div>
  );
};

export default UsersPage;