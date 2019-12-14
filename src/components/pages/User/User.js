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
      <div className="user-container">
        <Card className="user-card shadow-sm">
          <Card.Body>
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
  );
}
