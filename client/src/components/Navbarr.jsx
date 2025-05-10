import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Navbarr() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/auth/me', { withCredentials: true });
        if (res.data.success) {
          setUser(res.data.user);
        }
      } catch (error) {
        console.error('Not logged in', error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:4000/api/auth/logout', {}, { withCredentials: true });
      setUser(null);
      navigate('/signin');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <Navbar expand="lg" style={{ background: "#caf0f8" }}>
      <Container fluid>
        <Navbar.Brand href="/home" style={{ fontWeight: "700" }}>HireMeNow</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto  mx-5-md my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>

          <div className='d-flex gap-2'>
            {user ? (
              <>
                <span style={{ fontWeight: 'bold', alignSelf: 'center' }}>Hi, {user.name}</span>
                <Button variant="outline-dark" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button href='/signin' variant="outline-dark">Login</Button>
                <Button href='/signup' variant="outline-dark">Register</Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
