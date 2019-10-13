import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyByVFF41TqomyG0WHLrgK1mLYUiAjBnM9I",
  authDomain: "crown-clothing-d3c88.firebaseapp.com",
  databaseURL: "https://crown-clothing-d3c88.firebaseio.com",
  projectId: "crown-clothing-d3c88",
  storageBucket: "crown-clothing-d3c88.appspot.com",
  messagingSenderId: "776642812358",
  appId: "1:776642812358:web:ef36c45e3f5c86d65e7ac7",
  measurementId: "G-PC5EE45GZW"
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`) 
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createAt = new Date()

    try { 
      await userRef.set({
        displayName, email, createAt, ...additionalData
      })
    }
    catch (error) {
      console.log('error createing user', error.message)
    }
  }

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase