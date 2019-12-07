import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
// import { shirtBig } from '../../../images';
import { ecobagBig } from '../../../images';
import { notebookBig } from '../../../images';
import { stickersBig } from '../../../images';
import './SectionC.css';

const SectionC = () => (
  <div className="sectionC">
    <h2>Em destaque</h2>
    <div className="sectionC-CardDeck-container">
      <CardDeck className="sectionC-CardDeck">
        <Card className="sectionC-cards">
          <a href="/">
            <Card.Img variant="top" src={ecobagBig} />
            <Card.Body className="sectionC-cards-body">
              <Card.Title>EcoBag</Card.Title>
              <Card.Text>
                <p> Bolsa produzida com material reciclado e lavável.</p>
                <p>R$ 30,00</p>
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
          </a>
        </Card>
        <Card className="sectionC-cards">
          <a href="/">
            <Card.Img variant="top" src={notebookBig} />
            <Card.Body className="sectionC-cards-body">
              <Card.Title>Agenda 2020</Card.Title>
              <Card.Text>
                <p>
                  Não perca nenhum compromisso com a super agenda da Voluntei.
                </p>
                <p>R$ 20,00</p>
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
          </a>
        </Card>
        <Card className="sectionC-cards">
          <a href="/">
            <Card.Img variant="top" src={stickersBig} />
            <Card.Body className="sectionC-cards-body">
              <Card.Title>Adesivos</Card.Title>
              <Card.Text>
                <p>Deixe o seu computador descolado com os nossos adesivos.</p>
                <p>R$ 10,00</p>
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
          </a>
        </Card>
      </CardDeck>
    </div>
  </div>
);

export default SectionC;
