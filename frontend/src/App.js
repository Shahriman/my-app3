import React, { useEffect, useState } from 'react';

import './App.css';

 

function App() {

  const [users, setUsers] = useState([]);

 

  useEffect(() => {

    fetch('http://localhost:5000/api/users')

      .then(res => res.json())

      .then(data => setUsers(data))

      .catch(err => console.error('Error fetching users:', err));

  }, []);

 

  return (

    <div className="App">

      <h1>User List</h1>

      <ul>

        {users.map(user => (

          <li key={user.id}>

            <strong>{user.name}</strong> - {user.email}

          </li>

        ))}

      </ul>

    </div>

  );

}

 

export default App;
