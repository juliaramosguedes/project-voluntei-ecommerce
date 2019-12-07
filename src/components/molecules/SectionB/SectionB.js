import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import { shirtBig } from '../../../images';
// import { ecobagBig } from '../../../images';
import './SectionB.css';

const SectionB = () => (
  <div className="sectionB">
    <CardDeck>
      <Card className="cardB-left">
        <Card.Img className="cardB-image" variant="top" src={shirtBig} />
        {/* <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body> */}
        {/* <Card.Footer>
          <small className="text-muted">P  M  G</small>
        </Card.Footer> */}
      </Card>
      <Card className="cardB-right">
        {/* <Card.Img
          variant="top"
          src={ecobagBig}
        /> */}
        <Card.Body className="cardB-right-body">
          {/* <Card.Title className="cardB-right-title">
            Vista a camiseta do nosso time!
          </Card.Title> */}
          <Card.Text>
            <h2>Vista a camisa do nosso time!</h2>
            <p>Feita de algodão e disponível em dois modelos.</p>
          <Button className="sectionB-button" variant="light">Saiba mais</Button>
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardDeck>
  </div>
);

export default SectionB;
