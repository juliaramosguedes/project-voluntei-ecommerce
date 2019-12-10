import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
// import { shirtBig } from '../../../images';
import { ecobagBig } from '../../../images';
import { notebookBig } from '../../../images';
import { stickersBig } from '../../../images';
import { shirtBig } from '../../../images';
import './SectionC.css';

const SectionC = () => (
  <div className="sectionC">
    <h3>Lançamentos</h3>
    <div className="sectionC-CardDeck-container">
      <CardDeck className="sectionC-CardDeck">
        <Card className="sectionC-cards shadow p-3 mb-5 bg-white rounded">
          <a href="/product">
            <Card.Img variant="top" src={stickersBig} />
            <Card.Body className="sectionC-card-body">
              <Card.Title className="sectionC-card-title">Adesivos</Card.Title>
              <Card.Text>
                <p>Deixe o seu computador descolado com os nossos adesivos.</p>
                <p className="sectionC-card-price">R$ 10,00</p>
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
          </a>
        </Card>
        <Card className="sectionC-cards shadow p-3 mb-5 bg-white rounded">
          <a href="/product">
            <Card.Img variant="top" src={notebookBig} />
            <Card.Body className="sectionC-card-body">
              <Card.Title className="sectionC-card-title">Agenda 2020</Card.Title>
              <Card.Text>
                <p>
                  Não perca nenhum compromisso com a super agenda da Voluntei.
                </p>
                <p className="sectionC-card-price">R$ 20,00</p>
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
          </a>
        </Card>
        <Card className="sectionC-cards shadow p-3 mb-5 bg-white rounded">
          <a href="/product">
            <Card.Img variant="top" src={ecobagBig} />
            <Card.Body className="sectionC-card-body">
              <Card.Title className="sectionC-card-title">EcoBag</Card.Title>
              <Card.Text>
                <p> Bolsa produzida com material reciclado e lavável.</p>
                <p className="sectionC-card-price">R$ 30,00</p>
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
          </a>
        </Card>
        <Card className="sectionC-cards shadow p-3 mb-5 bg-white rounded">
          <a href="/product">
            <Card.Img variant="top" src={shirtBig} />
            <Card.Body className="sectionC-card-body">
              <Card.Title className="sectionC-card-title">Camisa</Card.Title>
              <Card.Text>
                <p>Feita de algodão e disponível em dois modelos.</p>
                <p className="sectionC-card-price">R$ 40,00</p>
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
