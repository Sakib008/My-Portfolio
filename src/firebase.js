import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBB5qCdUdUcLO8PviBrBLv-pUXvgqPldy0',
  authDomain: 'react-portfolio-sakib.firebaseapp.com',
  projectId: 'react-portfolio-sakib',
  storageBucket: 'react-portfolio-sakib.appspot.com',
  messagingSenderId: '1017299212259',
  appId: '1:1017299212259:web:96fef23e7b76d3ddc4f2d6',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
