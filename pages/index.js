import { Container, Navbar, Nav, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import BagIcon from "../components/BagIcon"; // Importando o ícone

export default function Home() {
  return (
    <>
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
            Qatu
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

      <Container className="text-center mt-5">
        <h1>Lorem Ipsum</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          mauris orci, auctor egestas eros vitae, ultricies condimentum mi.
          Suspendisse tristique.
        </p>
        <Button variant="outline-dark">Shop All</Button>

        <Row className="mt-5">
          <Col>
            <div className="position-relative" style={{ height: "300px" }}>
              <Image
                src="/banner.jpg"
                alt="Banner Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
