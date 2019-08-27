import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('Kz9csL1P4nrN7ex8A3A6').collection('cartItems').doc('M32i21owLFD2uV6OPNs0');
firestore.doc('/users/Kz9csL1P4nrN7ex8A3A6/cartItems/M32i21owLFD2uV6OPNs0');
firestore.collection('/users/Kz9csL1P4nrN7ex8A3A6/cartItems');