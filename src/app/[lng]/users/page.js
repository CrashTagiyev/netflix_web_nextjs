import React from "react";

async function Users() {
  const response = await fetch(`http://localhost:3000/api/users`);
  const users = (await response.json()).users;
  return (
    <div>
      {users.map((user) => (
        <h1>{user.name}</h1>
      ))}
    </div>
  );
}

export default Users;
