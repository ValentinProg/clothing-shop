import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"; 
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyChdqVGUe87OovKRSN-NGQWcNvNLgcsnCQ",
  authDomain: "web03clothing.firebaseapp.com",
  projectId: "web03clothing",
  storageBucket: "web03clothing.appspot.com",
  messagingSenderId: "946768493868",
  appId: "1:946768493868:web:df67b6cfedaa7c05f30089",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
 }
