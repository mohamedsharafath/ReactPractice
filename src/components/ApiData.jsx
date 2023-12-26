import React, { useState, useEffect } from 'react';

const UserTable = () => {
    const[users,setusers]=useState([]);
    const[isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        const fetchData = async() => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json;
                setusers(data);
                setIsLoading(false);
            }
            catch(error)
            {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };
        fetchData()
    },[])


  return (
    <div>
      <h1>User Table</h1>
      { isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;
