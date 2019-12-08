import React from 'react';
import {
  Card,
  CardDeck,
  FormControl,
  InputGroup,
  Button,
} from 'react-bootstrap';
import './SectionD.css';

const SectionD = () => (
  <div className="sectionD">
    <CardDeck className="sectionD-CardDeck">
      <Card className="sectionD-cards">
        <Card.Body className="sectionD-cards-body">
          <Card.Title>
            <h4>Cadastre-se para receber notícias e lançamentos de novos produtos.</h4>
          </Card.Title>
          {/* <Card.Text>
            Não perca nenhum compromisso com a super agenda da Voluntei.
          </Card.Text> */}
        </Card.Body>
      </Card>
      <Card className="sectionD-cards">
        <Card.Body className="sectionD-cards-body">
          {/* <Card.Title>Adesivos</Card.Title>
          <Card.Text>
            Deixe o seu computador mais cool com os nossos adesivos.
          </Card.Text> */}
          <InputGroup className="mb-3">
            {/* <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend> */}
            <FormControl
              className="sectionD-input"
              placeholder="E-mail"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Append>
              <Button className="sectionD-button" variant="outline-secondary">Cadastrar</Button>
            </InputGroup.Append>
          </InputGroup>
        </Card.Body>
      </Card>
    </CardDeck>
  </div>
);

export default SectionD;
