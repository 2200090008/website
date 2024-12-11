// src/components/UsersList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
    const [users, setUsers] = useState([]); // State to hold the users
    const [error, setError] = useState(null); // State to hold error messages

    // Fetch users data when the component mounts
    useEffect(() => {
        axios.get('http://localhost:8080/api/users') // Your backend API URL
            .then((response) => {
                setUsers(response.data); // Set the data from the API to state
            })
            .catch((error) => {
                setError('Error fetching data'); // Set error message in case of failure
                console.error('Error fetching users:', error); // Log the error to console
            });
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div>
            <h1>Users List</h1>
            {error && <p>{error}</p>} {/* Display error message if there's any */}
            <ul>
                {users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.id}>{user.name}</li> // Assuming the user object has `id` and `name` properties
                    ))
                ) : (
                    <p>Loading users...</p> // Display loading message while waiting for data
                )}
            </ul>
        </div>
    );
};

export default UsersList;
