import dynamic from "next/dynamic";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import animationData from "../public/animations/landingpage.json";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Carregando Lottie dinamicamente no lado do cliente
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Seção Inicial */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          padding: "1rem 2rem",
          textAlign: "center",
          gap: "1rem",
        }}
      >
        <h1 className="large-font">Qatu Marketplace</h1>
        <p className="lead medium-font" style={{ marginBottom: "1rem" }}>
          Conectando culturas, entregando experiências.
        </p>

        <Button
          variant="outline-light"
          style={{ marginBottom: "1rem" }}
          href="#"
        >
          Catálogo de Produtos
        </Button>

        {/* Animação */}
        <div className="animation-container" style={{ pointerEvents: "none" }}>
          <Lottie animationData={animationData} />
        </div>
      </div>

      {/* Seção de Produtos */}
      <Container className="mt-5">
        <h2 className="medium-font">Mais Vendidos</h2>
        <Row>
          {[...Array(6)].map((_, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <div className="position-relative" style={{ height: "30vh" }}>
                  {/* Usando vh para altura responsiva */}
                  <Image
                    src="/product-placeholder.png"
                    alt={`Produto ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Produto {index + 1}</Card.Title>
                  <Card.Text>Descrição breve do produto {index + 1}.</Card.Text>
                  <Button variant="primary">Comprar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
}
