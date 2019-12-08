import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

import './Footer.css';

const Footer = () => (
  <div className="footer">
    <CardDeck>
      <Card className="footer-card">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title className="footer-card-title">Fale conosco</Card.Title>
          <Card.Text>
            <ul class="list-unstyled">
              <li>Acompanhe seu pedido</li>
              <li>Trocas e devoluções</li>
              <li>Televendas: (11) 91234-5678</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="footer-card">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title className="footer-card-title">
            Formas de pagamento
          </Card.Title>
          <Card.Text>
            <ul class="list-unstyled">
              <li>PayPal</li>
              <li>Visa</li>
              <li>Mastercard</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="footer-card">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title className="footer-card-title">
            Sobre a Voluntei
          </Card.Title>
          <Card.Text>
            <ul class="list-unstyled">
              <li>Quem somos</li>
              <li>Junte-se a nós</li>
              <li>Política de privacidade</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  </div>
);

export default Footer;
