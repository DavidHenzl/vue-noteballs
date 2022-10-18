import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDdPPgUYJWLQqVFMhnqQcXlk3Ik_sURPRM',
  authDomain: 'noteballs-200c4.firebaseapp.com',
  projectId: 'noteballs-200c4',
  storageBucket: 'noteballs-200c4.appspot.com',
  messagingSenderId: '1078822166247',
  appId: '1:1078822166247:web:763969273d9f86827c8c42'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
	db,
  auth
}