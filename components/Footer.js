// Footer Component - Pode ser adicionado em pages/index.js ou como um componente separado
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#f5f5f5", padding: "40px 0" }}>
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <h5 className="fw-bold">Assine nossa newsletter!</h5>
            <p>
              Seja o primeiro a saber sobre estoque novo, promoções e descontos!
            </p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Endereço de e-mail"
                className="me-2"
              />
              <Button variant="dark">Assinar</Button>
            </Form>
          </Col>

          <Col md={2}>
            <h6 className="fw-bold">Loja</h6>
            <ul className="list-unstyled">
              <li>Eletrônicos</li>
              <li>Eletrodomésticos</li>
              <li>Monitores</li>
              <li>Teclado e Mouse</li>
              <li>Cuidados Pessoais</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6 className="fw-bold">Ajuda</h6>
            <ul className="list-unstyled">
              <li>Centro de Ajuda</li>
              <li>Status do Pedido</li>
              <li>Centro de Retorno</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6 className="fw-bold">Sobre Nós</h6>
            <ul className="list-unstyled">
              <li>Quem nós somos</li>
              <li>Tecnologia e Inovação</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
