import { useState, useEffect } from 'react';
import './User.css';

function User() {
const [users, setUsers] = useState([]);
 useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => setUsers(users))
  },[])
  return (
    <div>
    <table>
            <thead>
                <tr>
                    <th>
                        id
                    </th>
                    <th>
                        name
                    </th>
                    <th>
                        username
                    </th>
                </tr>
            </thead>
            <tbody>
                {users && users.map((user => <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                </tr>))}
            </tbody>
        </table>
        </div>
  );
}

export default User;