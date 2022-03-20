import Offcanvas from 'react-bootstrap/Offcanvas';
import {Nav, NavDropdown, Navbar, Container} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./OffCanvasStyles.css";
import { Button } from "react-bootstrap";

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
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/">Documentation</Nav.Link>
                    <Nav.Link href="/">Contribute</Nav.Link>
                    <Nav.Link href="/">Settings</Nav.Link>
                    <Nav.Link href="/">FAQ</Nav.Link>
                    <Nav.Link href="/"><Button>Sponsor </Button></Nav.Link>
                  </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
      </div>
    );
  }
export default Hamburger

