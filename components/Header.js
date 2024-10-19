import { Navbar, Container, Nav } from "react-bootstrap";
import Image from "next/image";
import BagIcon from "./BagIcon"; // Certifique-se de que o ícone está neste caminho

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <Image
            src="/qatu-logo.png"
            alt="Qatu Logo"
            width={30}
            height={30}
            className="me-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Nav.Link href="#">Loja</Nav.Link>
            <Nav.Link href="#">Sobre Nós</Nav.Link>
            <form className="d-flex ms-2">
              <input
                className="form-control"
                type="search"
                placeholder="🔍 Pesquisa"
                aria-label="Search"
              />
            </form>
          </Nav>
          <Nav className="align-items-center">
            <Nav.Link href="#" className="d-flex align-items-center">
              <BagIcon width="20" height="20" className="me-1" />
              <span>0</span>
            </Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
