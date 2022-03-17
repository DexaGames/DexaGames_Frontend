import Offcanvas from 'react-bootstrap/Offcanvas';
import {Nav, NavDropdown, Navbar, Container} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./OffCanvasStyles.css";

function Hamburger() {
    return (
      <div className='navWrapper'>
        <Navbar bg="" expand={false}>
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">How to play</Nav.Link>
                    <Nav.Link href="/">Docs</Nav.Link>
                    <Nav.Link href="/">Contribution</Nav.Link>
                    <Nav.Link href="/">Settings</Nav.Link>
                    <Nav.Link href="/">Notifications</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
      </div>
    );
  }
export default Hamburger

