import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import firebase from '../../../firebase/FirebaseConnection';
import { EditUser } from '../../molecules';
import './User.css';

export default function User({ userID, logoutUser }) {
  const deleteProfile = async () => {
    try {
      await firebase.auth().currentUser.delete();
      logoutUser();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="user-page">
      {/* <div > */}
      <Card className="user-exitButton-container">
        <Card.Body className="user-exitButton-wrap">
          <Button
            className="user-exitButton"
            variant="dark"
            onClick={() => logoutUser()}
          >
            Sair da conta
          </Button>
        </Card.Body>
      </Card>
      {/* </div> */}
      <div className="user-card-container">
        <Card className="user-card shadow-sm">
          <Card.Body>
            <h3 className="user-title">Conclua seu cadastro</h3>
            <p className="user-instructions">
              Por favor, preencha os campos abaixo para garantir que seus dados
              estejam atualizados.
            </p>
            <EditUser userID={userID} />
            <hr></hr>
            <div className="user-title-container">
              <h4 className="">Excluir conta</h4>
            </div>

            <Form.Label>
              Ao excluir sua conta, você não será mais um membro da loja
              Voluntei.
            </Form.Label>
            <Button
              className="user-button-delete"
              variant="dark"
              onClick={() => deleteProfile()}
            >
              Excluir conta
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

//               Encerrar a sessão.
//             </Form.Label>
//             <Button
//               className="user-buttons shadow-sm"
//               variant="dark"
//               onClick={() => logoutUser()}>Sair</Button>
// >>>>>>> develop
//             <Form.Label>
//               Ao excluir sua conta, você não será mais um membro da loja
//               Voluntei.
//             </Form.Label>
//             <Button
//               className="user-button-delete"
//               variant="dark"
//               onClick={() => deleteProfile()}
//             >
//               Excluir conta
//             </Button>
//           </Card.Body>
//         </Card>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { Card, Form, Button } from 'react-bootstrap';
// import firebase from '../../../firebase/FirebaseConnection';
// import { EditUser } from '../../molecules';
// import './User.css';

// const db = firebase.firestore();

// export default function User({ userID, logoutUser }) {
//   const deleteProfile = async () => {
//     try {
//       // await db.collection('users').doc(user.uid).delete();
//       await firebase.auth().currentUser.delete();
//       logoutUser();
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div className="user-page">
//       <div className="user-container">
//         <Card className="user-card shadow-sm">
//           <Card.Body>
// <<<<<<< HEAD
//             {/* <h3 className="user-status">{status}</h3> */}
//             <div className="user-title-container">
//               <h3 className="user-title">Suas informações</h3>
//             </div>
// =======
//             <h3 className="user-title">Conclua seu cadastro</h3>
// >>>>>>> develop
//             <p className="user-instructions">
//               Por favor, preencha os campos abaixo para garantir que seus dados
//               estejam atualizados.
//             </p>
// <<<<<<< HEAD
//             {/* <h3>{status}</h3> */}
//             <Form onSubmit={e => editProfile(e)}>
//               <Form.Group controlId="formBasicPassword">
//                 <Form.Label>Nome</Form.Label>
//                 <Form.Control
//                   type="text"
//                   // placeholder="Nome"
//                   value={name}
//                   onChange={e => setName(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Row>
//                 <Form.Group as={Col} md="8" controlId="formBasicPassword">
//                   <Form.Label>Endereço de e-mail</Form.Label>
//                   <Form.Control
//                     type="text"
//                     // placeholder="E-mail"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                   />
//                 </Form.Group>
//                 <Form.Group as={Col} md="4" controlId="formBasicPassword">
//                   <Form.Label>Telefone</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="FALTOU INCLUIR NO CÓDIGO"
//                     // value=""
//                     // onChange={e =>
//                     //   setAddress({ ...address, state: e.target.value })}
//                   />
//                 </Form.Group>
//               </Form.Row>
//               <Form.Row>
//                 <Form.Group as={Col} md="10" controlId="formBasicPassword">
//                   <Form.Label>Rua</Form.Label>
//                   <Form.Control
//                     type="text"
//                     // placeholder="Rua"
//                     value={address.street}
//                     onChange={e =>
//                       setAddress({ ...address, street: e.target.value })
//                     }
//                   />
//                 </Form.Group>
//                 <Form.Group as={Col} md="2" controlId="formBasicPassword">
//                   <Form.Label>Número</Form.Label>
//                   <Form.Control
//                     type="text"
//                     // placeholder="Número"
//                     value={address.number}
//                     onChange={e =>
//                       setAddress({ ...address, number: e.target.value })
//                     }
//                   />
//                 </Form.Group>
//               </Form.Row>
//               <Form.Row>
//                 <Form.Group as={Col} md="6" controlId="formBasicPassword">
//                   <Form.Label>Complemento</Form.Label>
//                   <Form.Control
//                     type="text"
//                     // placeholder="Complemento"
//                     value={address.complement}
//                     onChange={e =>
//                       setAddress({ ...address, complement: e.target.value })
//                     }
//                   />
//                 </Form.Group>

//                 <Form.Group as={Col} md="6" controlId="formBasicPassword">
//                   <Form.Label>Bairro</Form.Label>
//                   <Form.Control
//                     type="text"
//                     // placeholder="Bairro"
//                     value={address.neighborhood}
//                     onChange={e =>
//                       setAddress({ ...address, neighborhood: e.target.value })
//                     }
//                   />
//                 </Form.Group>
//               </Form.Row>
//               <Form.Row>
//                 <Form.Group as={Col} md="7" controlId="formGridCity">
//                   <Form.Label>Cidade</Form.Label>
//                   <Form.Control
//                     type="text"
//                     // placeholder="Cidade"
//                     value={address.city}
//                     onChange={e =>
//                       setAddress({ ...address, city: e.target.value })
//                     }
//                   />
//                 </Form.Group>

//                 <Form.Group as={Col} md="5" controlId="formGridState">
//                   <Form.Label>Estado</Form.Label>
//                   <Form.Control as="select">
//                     value={address.state}
//                     name="state" id="inputState" class="form-control" >
//                     <option>{address.state}</option>
//                     <option>Acre (AC) </option>
//                     <option>Alagoas (AL)</option>
//                     <option>Amapá (AP)</option>
//                     <option>Amazonas (AM)</option>
//                     <option>Bahia (BA)</option>
//                     <option>Ceará (CE)</option>
//                     <option>Distrito Federal (DF)</option>
//                     <option>Espírito Santo (ES)</option>
//                     <option>Goiás (GO)</option>
//                     <option>Maranhão (MA)</option>
//                     <option>Mato Grosso (MT)</option>
//                     <option>Mato Grosso do Sul (MS)</option>
//                     <option>Minas Gerais (MG)</option>
//                     <option>Pará (PA)</option>
//                     <option>Paraíba (PB)</option>
//                     <option>Paraná (PR)</option>
//                     <option>Pernambuco (PE)</option>
//                     <option>Piauí (PI)</option>
//                     <option>Rio de Janeiro (RJ)</option>
//                     <option>Rio Grande do Norte (RN)</option>
//                     <option>Rio Grande do Sul (RS)</option>
//                     <option>Rondônia (RO)</option>
//                     <option>Roraima (RR)</option>
//                     <option>Santa Catarina (SC)</option>
//                     <option>São Paulo (SP)</option>
//                     <option>Sergipe (SE)</option>
//                     <option>Tocantins (TO)</option>
//                   </Form.Control>
//                 </Form.Group>
//               </Form.Row>
//               <Form.Row>
//                 <Form.Group as={Col} md="3" controlId="formGridZip">
//                   <Form.Label>CEP</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="FALTOU INCLUIR NO CÓDIGO"
//                     // value={address.cep}
//                     // onChange={e =>
//                     //   setAddress({ ...address, state: e.target.value })
//                     // }
//                   />
//                 </Form.Group>
//               </Form.Row>
//               <Button type="submit" className="user-button-save" variant="dark">
//                 Salvar alterações
//               </Button>
//             </Form>

// =======
//             <EditUser userID={userID} />
//             <Form.Label>
//               Encerrar a sessão.
//             </Form.Label>
//             <Button
//               className="user-buttons shadow-sm"
//               variant="dark"
//               onClick={() => logoutUser()}>Sair</Button>
// >>>>>>> develop
