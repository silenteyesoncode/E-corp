import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBkPAuHAojxzlfaPH0C_jWIFhxwQzQnvXc",
  authDomain: "crown-b9831.firebaseapp.com",
  databaseURL: "https://crown-b9831.firebaseio.com",
  projectId: "crown-b9831",
  storageBucket: "crown-b9831.appspot.com",
  messagingSenderId: "635088897943",
  appId: "1:635088897943:web:87556b6507320b680e26d2",
  measurementId: "G-TER491GZLX"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;