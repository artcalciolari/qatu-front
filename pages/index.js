import dynamic from "next/dynamic";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import Image from "next/image";
import BagIcon from "../components/BagIcon"; // Importando o ícone
import animationData from "../public/animations/landingpage.json";
import BackgroundAnimation from "../components/BackgroundAnimation";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Carregando Lottie dinamicamente no lado do cliente
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      {/* Header */}
      <Header />
      
      {/* Seção Inicial */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh", // Mantém o conteúdo mais centralizado
          padding: "10px 20px", // Reduz o padding
          textAlign: "center",
          gap: "10px", // Espaçamento reduzido entre os itens
        }}
      >
        <h1 className="large-font" style={{ marginBottom: "5px" }}>
          Qatu Marketplace
        </h1>
        <p className="lead medium-font" style={{ marginBottom: "10px" }}>
          Conectando culturas, entregando experiências.
        </p>

        <Button variant="outline-light" style={{ marginBottom: "10px" }}>
          Catálogo de Produtos
        </Button>

        {/* Animação */}
        <div className="animation-container">
          <Lottie animationData={animationData} />
        </div>
      </div>

      {/* Seção de Produtos */}
      <Container className="mt-5">
        <h2 className="medium-font">Seleção de Produtos</h2>
        <Row>
          {[...Array(6)].map((_, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <div className="position-relative" style={{ height: "300px" }}>
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
