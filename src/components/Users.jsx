// src/components/Users.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';


function Users() {
  const [users, setUsers] = useState([]);     // State to store users
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);    // Error state

  // useEffect to fetch users when component mounts
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(`Failed to fetch users: ${error.message}`);
        setLoading(false);
      });

  }, []); // Empty dependency array ensures this runs only once

  if (loading) {
    return (
      <Container>
        <h3>
          <Spinner
            animation="border"
            variant="info"
            style={{ marginRight: '15px' }}
            role="status"
          />
          Loading Users...
        </h3>
      </Container>
    )
  }

  if (error) return <p>{error}</p>;

  return (
  <Container className="mt-5">
    <h3>User List</h3>
    {/* 2. Wrap your data in a Table with the 'responsive' prop */}
    <Table striped bordered hover responsive className="mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>📞 {user.phone}</td>
            <td>
              <a href={`mailto:${user.email}`} className="text-decoration-none">
                ✉️ {user.email}
              </a>
            </td>
            <td>
              <Button size="sm" href={`/user-todos/${user.id}`}>
                Todo List
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
  );
}

export default Users;