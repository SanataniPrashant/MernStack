import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



const TopNav = ()=>{
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand> <img id='logo' src="https://tse3.mm.bing.net/th?id=OIP.Ot-nVeqUock8T0EzUwUcPwHaE8&pid=Api&P=0&h=180" alt="Logo" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/searchvehicle">Search vehicles</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/addvehicle">
                Add vehicles
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link Link as={Link} to="/adminregistration">Admin Registration</Nav.Link>
            <Nav.Link Link as={Link} to="/adminlogin">
              Admin Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
    )
}
export default TopNav