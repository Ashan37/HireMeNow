import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarr() {
  return (
    <Navbar expand="lg" style={{background:"#caf0f8"}}>
      <Container fluid>
        <Navbar.Brand href="/home" style={{fontWeight:"700"}}>HireMeNow</Navbar.Brand>
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
          <Button href='/signin' variant="outline-dark">Login</Button>
          <Button href='/signup' variant="outline-dark">Register</Button>
          </div>
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;