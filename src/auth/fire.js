import firebase from 'firebase/app';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyB0UrAd8VkzIRPq8H4fJ5Ej4DDQtGyauFo',
  authDomain: 'fir-auth-project-21f67.firebaseapp.com',
  projectId: 'fir-auth-project-21f67',
  storageBucket: 'fir-auth-project-21f67.appspot.com',
  messagingSenderId: '1014524197496',
  appId: '1:1014524197496:web:fc56cb137fa5af4bf94b8d',
  measurementId: 'G-H2V43RZ912'
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
