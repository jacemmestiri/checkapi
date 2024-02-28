import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Import CSS file

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <div className="user-card-container">
        {userList.map(user => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;