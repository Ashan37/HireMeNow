import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function Signin() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card className="p-4 shadow-sm" style={{ width: '350px' }}>
        <Card.Body>
          <Card.Title className="mb-4 text-center">HireMeNow Login</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRemember">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-2">
              Login
            </Button>
            <Button variant="secondary" type="button" className="w-100">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
