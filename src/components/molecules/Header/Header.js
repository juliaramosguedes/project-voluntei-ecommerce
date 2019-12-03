import React from 'react';
// import './Header.css';
import { Button, Card, Nav } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const Header = () => (
  <div>
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Homem</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Mulher</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#first">Homem</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Mulher</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
);

export default Header;

// import React from 'react';
// // import './Header.css';
// // import Navbar from '../Navbar/Navbar';
// import Card from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';

// const Header = () => (
//   <>
//     <Card>
//       <Card.Header>Featured</Card.Header>
//       <Card.Body>
//         <Card.Title>Special title treatment</Card.Title>
//         <Card.Text>
//           With supporting text below as a natural lead-in to additional content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   </>
// );

// export default Header;
