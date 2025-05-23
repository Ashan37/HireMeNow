import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate,Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbarr() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await logout();           
    navigate('/signin');      
  };

  return (
    <Navbar expand="lg" style={{ background: "#caf0f8" }}>
      <Container fluid>
        <Navbar.Brand href="/home" style={{ fontWeight: 700 }}>
          HireMeNow
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto mx-5-md my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>

          <div className="d-flex gap-2">
            {user ? (
              <>
              
                <span style={{ fontWeight: 600 }}>
                  <Link to={'/profile'} style={{textDecoration:'none',color:'inherit'}}>
                   {user.name}
                  </Link>
                 
                </span>
                {/* This is the “Logout Button”:
                    it calls our shared logout() and then redirects */}
                <Button
                  onClick={handleLogoutClick}
                  variant="outline-dark"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button href="/signin" variant="outline-dark">
                  Login
                </Button>
                <Button href="/signup" variant="outline-dark">
                  Register
                </Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
