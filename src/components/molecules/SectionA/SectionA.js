import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardDeck, Button } from 'react-bootstrap';
import { bee } from '../../../images';
import './SectionA.css';

const SectionA = () => (
  <div className="sectionA">
    <CardDeck>
      <Card className="cardA-left">
        {/* <Card.Img
          variant="top"
          src="https://www.punkstein.com/loja/31595-thickbox_default/camiseta-sem-estampa.jpg"
        /> */}
        <Card.Body>
          {/* <Card.Title className="cardA-left-title">
            Produtos Voluntei
          </Card.Title> */}
          <Card.Text className="cardA-left-text">
            Nova<br></br> coleção 2020
          </Card.Text>
          <Button className="cardA-left-button" variant="outline-dark">
            Ver produtos
          </Button>
        </Card.Body>
      </Card>
      <Card className="cardA-right">
        <Card.Img variant="top" src={bee} />
        {/* <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardDeck>

    {/* <h1>SectionA</h1>
    <Container>
      <Row>
        <Col xs={6}>
          <h1>SectionA Left</h1>
        </Col>
        <Col xs={6}>
          <h1>SectionA Right</h1>
        </Col>
      </Row>
    </Container> */}
  </div>
);

export default SectionA;
