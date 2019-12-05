import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import './SectionB.css';

const SectionB = () => (
  <div className="sectionB">
    <h1>Nossos produtos</h1>
    <CardDeck>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.punkstein.com/loja/31595-thickbox_default/camiseta-sem-estampa.jpg"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.punkstein.com/loja/31595-thickbox_default/camiseta-sem-estampa.jpg"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.punkstein.com/loja/31595-thickbox_default/camiseta-sem-estampa.jpg"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  </div>
);

export default SectionB;
