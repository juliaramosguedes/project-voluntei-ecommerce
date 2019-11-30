import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAUGryodJpGh_NVvkz0_fvyAZPPb8DuGsU',
  authDomain: 'voluntei.firebaseapp.com',
  databaseURL: 'https://voluntei.firebaseio.com',
  projectId: 'voluntei',
  storageBucket: 'voluntei.appspot.com',
  messagingSenderId: '90644288619',
  appId: '1:90644288619:web:b7d2de4559fb8d3a114d2e',
  measurementId: 'G-EQSH71Z4Z0',
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
