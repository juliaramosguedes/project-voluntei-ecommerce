import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase/FirebaseConnection';
import { Card, Form, Button, Col } from 'react-bootstrap';
import './User.css';

const db = firebase.firestore();

export default function User({ userID }) {
  const [status, setStatus] = useState('Conclua seu cadastro.');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [address, setAddress] = useState({
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  useEffect(() => {
    if (userID) {
      setStatus('Usuário logado');

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
    } catch (error) {
      setStatus(error.message);
    }
  };

  const deleteProfile = async () => {
    try {
      // await db.collection('users').doc(user.uid).delete();
      await firebase.auth().currentUser.delete();

      setStatus('Usuário deletado com sucesso.');
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <div className="user-page">
      <div className="user-container">
        <Card className="user-card shadow-sm">
          {/* <Card style={{ width: '18rem' }}> */}
          <Card.Body>
            {/* <h3 className="user-status">{status}</h3> */}
            <h3 className="user-title">Suas informações</h3>
            <p className="user-instructions">
              Por favor, preencha os campos abaixo para garantir que seus dados
              estejam atualizados.
            </p>
            {/* <h3>{status}</h3> */}
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
                <Form.Label>Foto</Form.Label>
                <Form.Control
                  type="text"
                  // placeholder="Foto(url)"
                  value={photoURL}
                  onChange={e => setPhotoURL(e.target.value)}
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
              <Form.Group controlId="formBasicPassword">
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
              <Form.Group controlId="formBasicPassword">
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

              {/* <Form.Group controlId="formBasicPassword">
                <Form.Label>Estado</Form.Label>
                <Form.Control
                  type="text"
                  // placeholder="Estado"
                  value={address.state}
                  onChange={e =>
                    setAddress({ ...address, state: e.target.value })
                  }
                />
              </Form.Group> */}
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Estado</Form.Label>
                <Form.Control as="select">
                  value={address.state}
                  name="state" id="inputState" class="form-control" >
                  <option>{address.state}</option>
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
                  placeholder="FALTOU INCLUIR NO CÓDIGO"
                  // value={address.cep}
                  // onChange={e =>
                  //   setAddress({ ...address, state: e.target.value })
                  // }
                />
              </Form.Group>
              </Form.Row>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="FALTOU INCLUIR NO CÓDIGO"
                  // value=""
                  // onChange={e =>
                  //   setAddress({ ...address, state: e.target.value })}
                />
              </Form.Group>

              <Button type="submit" className="user-buttons shadow-sm" variant="dark">
                Salvar alterações
              </Button>
            </Form>
            <Form.Label>
              Ao deletar sua conta, você não será mais um membro da loja
              Voluntei.
            </Form.Label>
            <Button
              className="user-buttons shadow-sm"
              variant="dark"
              onClick={() => deleteProfile()}
            >
              Excluir cadastro
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import firebase from '../../../firebase/FirebaseConnection';
// import { Card, CardDeck, Button } from 'react-bootstrap';
// import './User.css';

// const db = firebase.firestore();

// export default function User({ userID }) {
//   const [status, setStatus] = useState('Conclua seu cadastro.');
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [photoURL, setPhotoURL] = useState('');
//   const [address, setAddress] = useState({
//     street: '',
//     number: '',
//     complement: '',
//     neighborhood: '',
//     city: '',
//     state: '',
//   });

//   useEffect(() => {
//     if (userID) {
//       setStatus('Usuário logado');

//       db.collection('users')
//         .doc(userID)
//         .get()
//         .then(doc => {
//           if (doc.exists) {
//             const data = doc.data();
//             setEmail(data.email);
//             if (data.name) setName(data.name);
//             if (data.photoURL) setPhotoURL(data.photoURL);
//             if (data.address) setAddress(data.address);
//           } else {
//             setStatus('Usuário não encontrado');
//           }
//         });
//     }
//   }, []);

//   const editProfile = async e => {
//     e.preventDefault();

//     try {
//       await db
//         .collection('users')
//         .doc(userID)
//         .set({
//           name,
//           email,
//           photoURL,
//           address,
//         });

//       const currUser = await firebase.auth().currentUser;

//       currUser.updateProfile({
//         displayName: name,
//         photoURL,
//       });

//       currUser.updateEmail(email);

//       setStatus('Cadastro atualizado com sucesso.');
//     } catch (error) {
//       setStatus(error.message);
//     }
//   };

//   const deleteProfile = async () => {
//     try {
//       // await db.collection('users').doc(user.uid).delete();
//       await firebase.auth().currentUser.delete();

//       setStatus('Usuário deletado com sucesso.');
//     } catch (error) {
//       setStatus(error.message);
//     }
//   };

//   return (
//     <>
//       <h1>Suas informações</h1>
//       <p>Por favor, preencha os campos abaixo para garantir que seus dados estejam atualizados.</p>
//       <h3>{status}</h3>
//       <form onSubmit={e => editProfile(e)}>
//         <label>Nome: </label>
//         <input
//           type="text"
//           value={name}
//           onChange={e => setName(e.target.value)}
//         />
//         <br />
//         <label>E-mail: </label>
//         <input
//           type="text"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//         <br />
//         <label>Foto URL: </label>
//         <input
//           type="text"
//           value={photoURL}
//           onChange={e => setPhotoURL(e.target.value)}
//         />
//         <br />
//         <label>Rua: </label>
//         <input
//           type="text"
//           value={address.street}
//           onChange={e => setAddress({ ...address, street: e.target.value })}
//         />
//         <br />
//         <label>Número: </label>
//         <input
//           type="text"
//           value={address.number}
//           onChange={e => setAddress({ ...address, number: e.target.value })}
//         />
//         <br />
//         <label>Complemento: </label>
//         <input
//           type="text"
//           value={address.complement}
//           onChange={e => setAddress({ ...address, complement: e.target.value })}
//         />
//         <br />
//         <label>Bairro: </label>
//         <input
//           type="text"
//           value={address.neighborhood}
//           onChange={e =>
//             setAddress({ ...address, neighborhood: e.target.value })
//           }
//         />
//         <br />
//         <label>Cidade: </label>
//         <input
//           type="text"
//           value={address.city}
//           onChange={e => setAddress({ ...address, city: e.target.value })}
//         />
//         <br />
//         <label>Estado: </label>
//         <input
//           type="text"
//           value={address.state}
//           onChange={e => setAddress({ ...address, state: e.target.value })}
//         />
//         <br />
//         <button type="submit">Salvar alterações</button>
//       </form>
//       <button onClick={() => deleteProfile()}>Excluir cadastro</button>
//     </>
//   );
// }
