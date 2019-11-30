import React, { Component } from 'react';
import firebase from '../../../firebase/FirebaseConnection';

const db = firebase.firestore();

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      status: 'Entre ou cadastre-se',
      user: null,
    };

    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          email: '',
          password: '',
          user,
          status: 'Usuário logado',
        });
      }
    });
  }

  signup() {
    const { email, password } = this.state;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        this.setState({ status: 'Usuário cadastrado com sucesso.' });
        db.collection('users').doc(cred.user.uid).set({ email });
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') this.setState({ status: 'E-mail inválido' });
        if (error.code === 'auth/weak-password') this.setState({ status: 'Crie uma senha mais forte' });
        console.log(error.message);
      });
  }

  login() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ status: 'Usuário logado com sucesso.' });
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') this.setState({ status: 'Senha incorreta' });
        console.log(error.message);
      })
  }

  logout() {
    firebase.auth().signOut();
    this.setState({
      status: 'Usuário deslogado com sucesso',
      user: null,
      email: '',
      password: '',
    });
  }

  render() {
    const { status, user, email, password } = this.state;
    return (
      <div>
        <h1>Seja bem vindo</h1>
        <h3>{status}</h3>
        <div>
          <label>E-mail: </label>
          <input type="text" value={email} onChange={(e) => this.setState({ email: e.target.value })} /><br />
          <label>Senha: </label>
          <input type="password" value={password} onChange={(e) => this.setState({ password: e.target.value })} /><br />
          {
            user ?
              <button onClick={this.logout}>Sair</button>
              :
              <>
                <button onClick={this.login}>Entrar</button>
                <button onClick={this.signup}>Cadastrar</button>
              </>
          }
        </div>
      </div>
    );
  }
}
