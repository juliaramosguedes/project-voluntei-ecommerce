import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardDeck, Button } from 'react-bootstrap';
import { beeYellow } from '../../../images';
import './SectionA.css';

const SectionA = () => (
  <div className="sectionA">
    <CardDeck className="sectionA-cardDeck">
      <Card className="cardA-left">
        {/* <Card.Img
          variant="top"
          src="https://www.punkstein.com/loja/31595-thickbox_default/camiseta-sem-estampa.jpg"
        /> */}
        <Card.Body className="cardA-left-body">
          {/* <Card.Title className="cardA-left-title">
            Produtos Voluntei
          </Card.Title> */}
          <Card.Text className="cardA-left-text">
            <h1>Bem vindo à loja Voluntei!</h1>
            <p>Conheça nossos produtos.</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="cardA-right">
        <Card.Img variant="top" src={beeYellow} />
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
  </div>
);

export default SectionA;
