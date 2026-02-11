// src/components/UserForm.js

import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FormModal from './FormModal';
import axios from 'axios';
import Users from './Users';

const UserForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    food: '',
    communication: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
      console.log(response.data);
      setUser(response.data);
      setSubmitted(true);
      setShowModal(true);
      setError(null);
    } catch (err) {
      setError(`Error submitting the form. Please try again: ${err.message}`);
      setSubmitted(false);
    }
    }
    setValidated(true);
  };

  return (
    <Container className="mt-5">
      <h2>Create User</h2>
      <FormModal user={user} submitted={submitted} showModal={showModal} handleCloseModal={handleCloseModal} />

      {submitted && <Alert variant="success" dismissible>User created successfully!</Alert>}
      {error && <Alert variant="danger" dismissible>{error}</Alert>}

      
      <Form onSubmit={handleSubmit} noValidate validated={validated}></Form>

      <Form onSubmit={handleSubmit}>
        <Row>
            <Col md="4">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
              
              <Form.Control.Feedback type="invalid">
                Please provide a name
              </Form.Control.Feedback>

            </Form.Group>
            </Col>
            
            <Col md="4">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
              
              <Form.Control.Feedback type="invalid">
                Please provide a name
              </Form.Control.Feedback>

            </Form.Group>
            </Col>
        </Row>
        <Row>

          <Col md="8">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <Form.Control.Feedback type="invalid">
                Please provide an email
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md="8">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              
              <Form.Control.Feedback type="invalid">
                Please provide a phone number
              </Form.Control.Feedback>
          </Col>
        </Row>
        
        <Form.Group className="mb-3 mt-3" controlId="formRadio">
          <Form.Label>Agree to terms of service:</Form.Label>
          <Form.Check
            type="radio"
            id="agree"
            name="communication"
            label="Agree"
            value="Agree"
            onChange={handleChange}
            required
          />
          {validated && !formData.communication && (
            <Form.Control.Feedback type="invalid" className="d-block">
              Please agree to terms of service
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    
    <Users />
    </Container>
  );
};

export default UserForm;