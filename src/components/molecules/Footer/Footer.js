import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { iconFacebook } from '../../../images';
import { iconInstagram } from '../../../images';
import { iconLinkedin } from '../../../images';
import { iconTwitter } from '../../../images';
import { iconYouTube } from '../../../images';

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
              <li>WhatsApp: (11) 91234-5678</li>
              <li>Enviar e-mail</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="footer-card">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title className="footer-card-title">Ajuda e suporte</Card.Title>
          <Card.Text>
            <ul class="list-unstyled">
              <li>Políticas de troca e arrependimento</li>
              <li>Política de privacidade</li>
              <li>Perguntas frequentes</li>
              <li>Termos e condições</li>
              <li>Fornecedores</li>
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
            <ul className="list-unstyled">
              <li>Quem somos</li>
              <li>Junte-se a nós</li>
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

            {/* <a href="/https://www.facebook.com"><img className="footer-social-media" src={iconFacebook} /></a> */}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  </div>
);

export default Footer;
