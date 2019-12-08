import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
  InputGroup,
} from 'react-bootstrap';
import { logoYellowSmall } from '../../../images';
import { magnifyingGlass } from '../../../images';
import './Navigation.css';

const Navigation = () => (
  <div>
    <div className="navigation-container">
      <Navbar
        collapseOnSelect
        className="navigation"
        bg="dark"
        variant="dark"
        style={{ color: 'black' }}
      >
        <Navbar.Brand href="#home">
          <Image className="nav-logo" src={logoYellowSmall} rounded />
        </Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link className="NavLinks" href="#home">Masculino</Nav.Link>
        <Nav.Link className="NavLinks" href="#features">Feminino</Nav.Link>
        <Nav.Link className="NavLinks" href="#pricing">Infantil</Nav.Link> */}
        </Nav>
        <Form inline>
          <InputGroup className="mb-3">
            <FormControl
              className="navigation-search-box"
              placeholder="Procurar"
              aria-label="Procurar"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Append>
              <InputGroup.Text
                className="navigation-magnifying"
                id="basic-addon1"
              >
                <Image src={magnifyingGlass} rounded />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>

          <Button variant="outline-info">Buscar produtos</Button>
          <Button variant="outline-info">Account</Button>
          <Button variant="outline-info">Chart</Button>
        </Form>
      </Navbar>
    </div>
  </div>
);

export default Navigation;
