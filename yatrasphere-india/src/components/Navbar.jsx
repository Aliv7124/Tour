import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

export default function AppNavbar() {
  return (
    <Navbar expand="lg" sticky="top" className="py-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/">SAFFRON HORIZONS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/destinations">Destinations</Nav.Link>
            <Nav.Link as={NavLink} to="/packages">Packages</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Button as={Link} to="/contact" className="btn-saffron ms-lg-3 mt-2 mt-lg-0">
              Plan My Trip
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}