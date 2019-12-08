import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import { logoYellowSmall } from '../../../images';
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
          <FormControl type="text" placeholder="Procurar" className="mr-sm-2" />
          <Button variant="outline-info">Buscar produtos</Button>
          <Button variant="outline-info">Account</Button>
          <Button variant="outline-info">Chart</Button>
        </Form>
      </Navbar>
    </div>
  </div>
);

export default Navigation;
