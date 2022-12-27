import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAfhD-RwOpbBnenbNzbmAY31c7gagRXE5g",
  authDomain: "cloth-brand-db.firebaseapp.com",
  projectId: "cloth-brand-db",
  storageBucket: "cloth-brand-db.appspot.com",
  messagingSenderId: "566065804077",
  appId: "1:566065804077:web:4da14e7f56c061f5c699a4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleProvider)
export const db = getFirestore(firebaseApp);
export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, "user", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createDate = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createDate,...additionalInformation });
    } catch (error) {
      console.log('error creating the user',error.meessage)
    }
  }
  return userDocRef
};
export const createAuthUserWithEmailAndPassword=async (email,password)=>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password)
}