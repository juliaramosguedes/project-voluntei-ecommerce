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
          <Card.Title className="sectionD-card-title">
            <h4>
              Cadastre-se para receber notícias e lançamentos de novos produtos.
            </h4>
          </Card.Title >
        </Card.Body>
      </Card>
      <Card className="sectionD-cards">
        <Card.Body className="sectionD-cards-body">
          <InputGroup className="mb-3">
            <FormControl
              className="sectionD-input"
              placeholder="E-mail"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Append>
              <Button className="sectionD-button" variant="outline-secondary">
                Cadastrar
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Card.Body>
      </Card>
    </CardDeck>
  </div>
);

export default SectionD;
