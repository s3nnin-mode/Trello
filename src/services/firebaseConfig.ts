// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { createUserWithEmailAndPassword, getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, setDoc, doc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

class Firebase {

    app: any;
    analytics: any;
    auth: any;
    db: any;

    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.analytics = getAnalytics(this.app);
        this.auth = getAuth(this.app);
        this.db = getFirestore(this.app)
    }

    registerUser = async ({nombre, correo, contraseña}: {nombre: string, correo: string, contraseña: string} ) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(this.auth, correo, contraseña);
          const uid = userCredential.user.uid;
          console.log('Datos del usuario guardados correctamente', userCredential.user);
      
          await setDoc(doc(this.db, 'users', uid), {
            name: nombre,
            email: correo,
            photoUrl: '',
            coord: {lat: 16.868, lon: -99.894},
            history: []
          });
      
          await signOut(this.auth);
          console.log('Datos del usuario subidos');
          
          return 'Registro exitoso';
        } catch(error) {
          if (error.code === 'auth/email-already-in-use') {
            console.error('The email is already registered.');
            return 'The email is already registered.'
          } else if (error.code === 'auth/invalid-email') {
            console.error('Invalid email format.');
            return 'Invalid email format.';
          } else if (error.code === 'auth/weak-password') {
            console.error('Password is too weak.');
            return 'Password is too weak.';
          } else {
            console.error('Error during registration:', error.message);
            return 'Error during registration';
          }
        }
    }

    loginUser = async ({email, password}: {email: string, password: string}) => {
        return signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          return 'Login exitoso';
        })
        .catch((error) => {
          const errorCode = error.code.trim();
          const errorMessage = error.message;
          console.log('error login errorCode: ', errorCode);
          console.log('error login message: ', errorMessage)
          switch (error.code) {
            case 'auth/invalid-email':
              return 'El formato del correo electrónico no es válido.';
            case 'auth/too-many-requests':
              return 'Demasiados intentos fallidos. Inténtalo de nuevo más tarde.';
            case 'auth/invalid-credential':
              return 'Credenciales invalidas, porfavor verifica tu correo y contraseña.'
            default:
              return 'Ocurrió un error inesperado. Inténtalo más tarde.';
          } 
        });
      }
}