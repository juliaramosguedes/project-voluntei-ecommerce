import React, { useState, useEffect } from 'react';
import { useLastLocation, RedirectWithoutLastLocation } from 'react-router-last-location';
import { Redirect } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';
import firebase from '../../../firebase/FirebaseConnection';
import { EditUser } from '../../molecules';
import './User.css';

const db = firebase.firestore();

export default function User({ userID, logoutUser }) {
  const [status, setStatus] = useState('Conclua seu cadastro.');
  const [redirect, setRedirect] = useState(false);

  const deleteProfile = async () => {
    try {
      // await db.collection('users').doc(user.uid).delete();
      await firebase.auth().currentUser.delete();
      setStatus('Usuário deletado com sucesso.');
      setRedirect(true);
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <>
    {redirect ?
    <Redirect to='/' />
  :
    <div className="user-page">
      <div className="user-container">
        <Card className="user-card shadow-sm">
          {/* <Card style={{ width: '18rem' }}> */}
          <Card.Body>
            {/* <h3 className="user-status">{status}</h3> */}
            <h3 className="user-title">Conclua seu cadastro</h3>
            <p className="user-instructions">
              Por favor, preencha os campos abaixo para garantir que seus dados
              estejam atualizados.
            </p>
            <EditUser userID={userID} />
            <Form.Label>
              Encerrar a sessão.
            </Form.Label>
            <Button
              className="user-buttons shadow-sm"
              variant="dark"
              onClick={() => logoutUser()}>Sair</Button>
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
  }
    </>
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
