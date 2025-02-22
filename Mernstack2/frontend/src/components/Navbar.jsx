import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Top() {

    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Books Management System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="display">DIsplay</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="update">Update</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    )
  }
  
  export default Top