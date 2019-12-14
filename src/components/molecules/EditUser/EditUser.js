import React, { useState, useEffect } from 'react';
import { useLastLocation } from 'react-router-last-location';
import { Redirect } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import firebase from '../../../firebase/FirebaseConnection';

const db = firebase.firestore();

export default function EditUser({ userID }) {
  const [status, setStatus] = useState('Conclua seu cadastro.');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    zip: '',
  });

  useEffect(() => {
    if (userID) {
      db.collection('users')
        .doc(userID)
        .get()
        .then(doc => {
          if (doc.exists) {
            const data = doc.data();
            setEmail(data.email);
            if (data.name) setName(data.name);
            if (data.photoURL) setPhotoURL(data.photoURL);
            if (data.address) setAddress(data.address);
          } else {
            setStatus('Usuário não encontrado');
          }
        });
    }
  }, []);

  const lastLocation = useLastLocation();

  const editProfile = async e => {
    e.preventDefault();

    try {
      await db
        .collection('users')
        .doc(userID)
        .set({
          name,
          email,
          photoURL,
          address,
        });

      const currUser = await firebase.auth().currentUser;

      currUser.updateProfile({
        displayName: name,
        photoURL,
      });

      currUser.updateEmail(email);

      setStatus('Cadastro atualizado com sucesso.');

      setTimeout(() => {
        if (lastLocation) console.log(lastLocation);
        // <Redirect to="/cart" />
        if (lastLocation) return <Redirect to={lastLocation.pathname} />;
      }, 1000);
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <Form onSubmit={e => editProfile(e)}>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          // placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Endereço de e-mail</Form.Label>
        <Form.Control
          type="text"
          // placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Rua</Form.Label>
        <Form.Control
          type="text"
          // placeholder="Rua"
          value={address.street}
          onChange={e =>
            setAddress({ ...address, street: e.target.value })
          }
        />
      </Form.Group>
      <Form.Row>
      <Form.Group as={Col} controlId="formBasicPassword">
        <Form.Label>Número</Form.Label>
        <Form.Control
          type="text"
          // placeholder="Número"
          value={address.number}
          onChange={e =>
            setAddress({ ...address, number: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group as={Col} controlId="formBasicPassword">
        <Form.Label>Complemento</Form.Label>
        <Form.Control
          type="text"
          // placeholder="Complemento"
          value={address.complement}
          onChange={e =>
            setAddress({ ...address, complement: e.target.value })
          }
        />
      </Form.Group>
      </Form.Row>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Bairro</Form.Label>
        <Form.Control
          type="text"
          // placeholder="Bairro"
          value={address.neighborhood}
          onChange={e =>
            setAddress({ ...address, neighborhood: e.target.value })
          }
        />
      </Form.Group>
      <Form.Row>
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Cidade</Form.Label>
        <Form.Control
          type="text"
          // placeholder="Cidade"
          value={address.city}
          onChange={e =>
            setAddress({ ...address, city: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Estado</Form.Label>
        <Form.Control as="select" onChange={e =>
            setAddress({ ...address, state: e.target.value })
          }>
          <option>{address.state}</option>
          <option disabled value> -- Selecione um estado --</option>
          <option>Acre (AC) </option>
          <option>Alagoas (AL)</option>
          <option>Amapá (AP)</option>
          <option>Amazonas (AM)</option>
          <option>Bahia (BA)</option>
          <option>Ceará (CE)</option>
          <option>Distrito Federal (DF)</option>
          <option>Espírito Santo (ES)</option>
          <option>Goiás (GO)</option>
          <option>Maranhão (MA)</option>
          <option>Mato Grosso (MT)</option>
          <option>Mato Grosso do Sul (MS)</option>
          <option>Minas Gerais (MG)</option>
          <option>Pará (PA)</option>
          <option>Paraíba (PB)</option>
          <option>Paraná (PR)</option>
          <option>Pernambuco (PE)</option>
          <option>Piauí (PI)</option>
          <option>Rio de Janeiro (RJ)</option>
          <option>Rio Grande do Norte (RN)</option>
          <option>Rio Grande do Sul (RS)</option>
          <option>Rondônia (RO)</option>
          <option>Roraima (RR)</option>
          <option>Santa Catarina (SC)</option>
          <option>São Paulo (SP)</option>
          <option>Sergipe (SE)</option>
          <option>Tocantins (TO)</option>
        </Form.Control>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>CEP</Form.Label>
        <Form.Control
          type="text"
          value={address.zip}
          onChange={e =>
            setAddress({ ...address, zip: e.target.value })
          }
        />
      </Form.Group>
      </Form.Row>

      <Button type="submit" className="user-buttons shadow-sm" variant="dark">
        Salvar alterações
      </Button>
    </Form>
  );
}
