import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

// social media icons
import { iconFacebook } from '../../../images';
import { iconInstagram } from '../../../images';
import { iconLinkedin } from '../../../images';
import { iconTwitter } from '../../../images';
import { iconYouTube } from '../../../images';

// credit cards icons
import { amex } from '../../../images';
import { boleto } from '../../../images';
import { dinersclub } from '../../../images';
import { elo } from '../../../images';
import { hipercard } from '../../../images';
import { mastercard } from '../../../images';
import { paypal } from '../../../images';
import { visa } from '../../../images';
import { visacheckout } from '../../../images';

import './Footer.css';

const Footer = () => (
  <div className="footer-container">
    <div className="footer">
      <CardDeck>
        <Card className="footer-card">
          <Card.Body className="footer-card-body">
            <Card.Title className="footer-card-title">Fale conosco</Card.Title>
            <Card.Text>
              <ul className="list-unstyled">
                <li>
                  <a className="footer-links" href="/">
                    Acompanhe seu pedido
                  </a>
                </li>
                <li>
                  <a className="footer-links" href="/">
                    Trocas e devoluções
                  </a>
                </li>
                <li>Televendas: (11) 91234-5678</li>
                <li>WhatsApp: (11) 91234-5678</li>
                <li>
                  <a className="footer-links" href="/">
                    Enviar e-mail
                  </a>
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="footer-card">
          <Card.Body className="footer-card-body">
            <Card.Title className="footer-card-title">
              Ajuda e suporte
            </Card.Title>
            <Card.Text>
              <ul className="list-unstyled">
                <li>
                  <a className="footer-links" href="/">
                    Política de trocas
                  </a>
                </li>
                <li>
                  <a className="footer-links" href="/">
                    Política de privacidade
                  </a>
                </li>
                <li>
                  <a className="footer-links" href="/">
                    Perguntas frequentes
                  </a>
                </li>
                <li>
                  <a className="footer-links" href="/">
                    Termos e condições
                  </a>
                </li>
                <li>
                  <a className="footer-links" href="/">
                    Fornecedores
                  </a>
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="footer-card">
          <Card.Body className="footer-card-body">
            <Card.Title className="footer-card-title">
              Sobre a Voluntei
            </Card.Title>
            <Card.Text>
              <ul className="list-unstyled">
                <li>
                  <a className="footer-links" href="/">
                    Quem somos
                  </a>
                </li>
                <li>
                  <a className="footer-links" href="/">
                    Junte-se a nós
                  </a>
                </li>
              </ul>
              <Card.Title className="footer-card-title">Siga-nos</Card.Title>
              <ul className="list-unstyled footer-social-media-list">
                <li>
                  <a href="https://www.facebook.com/">
                    <img className="footer-social-media" src={iconFacebook} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <img className="footer-social-media" src={iconInstagram} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <img className="footer-social-media" src={iconLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/">
                    <img className="footer-social-media" src={iconTwitter} />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/">
                    <img className="footer-social-media" src={iconYouTube} />
                  </a>
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
    <div className="footer-payments-container">
      <ul className="list-unstyled footer-credit-cards-list">
        <li>
          <img className="footer-credit-cards" src={boleto} />
        </li>
        <li>
          <img className="footer-credit-cards" src={visa} />
        </li>
        <li>
          <img className="footer-credit-cards" src={mastercard} />
        </li>
        <li>
          <img className="footer-credit-cards" src={hipercard} />
        </li>
        <li>
          <img className="footer-credit-cards" src={elo} />
        </li>
        <li>
          <img className="footer-credit-cards" src={amex} />
        </li>
        <li>
          <img className="footer-credit-cards" src={dinersclub} />
        </li>
        <li>
          <img className="footer-credit-cards" src={paypal} />
        </li>
        {/* <li>
          <img className="footer-credit-cards" src={visacheckout} />
        </li> */}
      </ul>
    </div>
  </div>
);

export default Footer;
