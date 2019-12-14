import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import './Footer.css';

const Footer = () => (
  <div className="footer-container">
    <div className="footer">
      <CardDeck>
        <Card className="footer-card">
          <Card.Body className="footer-card-body">
            <Card.Title className="footer-card-title">Fale conosco</Card.Title>
            {/* <Card.Text> */}
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
            {/* </Card.Text> */}
          </Card.Body>
        </Card>
        <Card className="footer-card">
          <Card.Body className="footer-card-body">
            <Card.Title className="footer-card-title">
              Ajuda e suporte
            </Card.Title>
            {/* <Card.Text> */}
            <ul className="list-unstyled">
              <li>
                <a className="footer-links" href="/">
                  Política de troca e devolução
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
            {/* </Card.Text> */}
          </Card.Body>
        </Card>
        <Card className="footer-card">
          <Card.Body className="footer-card-body">
            <Card.Title className="footer-card-title">
              Sobre a Voluntei
            </Card.Title>
            {/* <Card.Text> */}
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
                  <img
                    className="footer-social-media"
                    src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FiconFacebook.png?alt=media&token=95fcf770-8237-4446-ab07-4c14eebe2cfb"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <img
                    className="footer-social-media"
                    src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FiconInstagram.png?alt=media&token=747c5141-1cef-45a1-bcce-e3aa1a58fea7"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <img
                    className="footer-social-media"
                    src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FiconLinkedin.png?alt=media&token=b8363fd0-879b-431e-940f-4c3f7178b967"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <img
                    className="footer-social-media"
                    src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FiconTwitter.png?alt=media&token=46628d86-dce4-4821-a8ed-ab178ed429aa"
                  />
                </a>
              </li>
              {/* <li>
                <a href="https://www.youtube.com/">
                  <img
                    className="footer-social-media"
                    src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FiconYouTube.png?alt=media&token=d2b83526-cfc9-4b95-9bac-2dd44e3048fd"
                  />
                </a>
              </li> */}
            </ul>
            {/* </Card.Text> */}
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
    <div className="footer-payments-container">
      <ul className="list-unstyled footer-credit-cards-list">
        <li>
          <img
            className="footer-credit-cards"
            src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2Felo.jpg?alt=media&token=f691e942-3db3-420a-aa37-b042368abd74"
          />
        </li>
        <li>
          <img
            className="footer-credit-cards"
            src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2Fvisa.jpg?alt=media&token=a2e114c6-ad22-40c2-9bb0-e1031c20a509"
          />
        </li>
        <li>
          <img
            className="footer-credit-cards"
            src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2Fmastercard.jpg?alt=media&token=26651ecc-c44d-42ed-aa4e-c8577c65b53a"
          />
        </li>
        <li>
          <img
            className="footer-credit-cards"
            src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2Fhipercard.jpg?alt=media&token=bd293552-6c47-45e3-99d7-22694760af4f"
          />
        </li>
        <li>
          <img
            className="footer-credit-cards"
            src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2Famex.jpg?alt=media&token=108a1c07-45e7-4721-806c-bd27902ca0a5"
          />
        </li>

        <li>
          <img
            className="footer-credit-cards"
            src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2Fpaypal.jpg?alt=media&token=c24f15df-6923-42f2-90b3-1b559529aa2e"
          />
        </li>
        {/* <li>
          <img className="footer-credit-cards" src={visacheckout} />
        </li> */}
      </ul>
    </div>
  </div>
);

export default Footer;
