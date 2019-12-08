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
import { profileUser } from '../../../images';
import { shoppingCart } from '../../../images';
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
              <Button className="navigation-magnifying">
                <Image src={magnifyingGlass} rounded />
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <Button className="navigation-buttons-icons" variant="dark">
            <Image className="navigation-icons" src={profileUser} rounded />
          </Button>
          <Button className="navigation-buttons-icons">
            <Image className="navigation-icons" src={shoppingCart} rounded />
          </Button>
        </Form>
      </Navbar>
    </div>
  </div>
);

export default Navigation;
