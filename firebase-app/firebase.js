
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCuofbHOZA9xveGIHS2LYIN08uuyAu8C04",
  authDomain: "pixelshop-3ad9f.firebaseapp.com",
  projectId: "pixelshop-3ad9f",
  storageBucket: "pixelshop-3ad9f.appspot.com",
  messagingSenderId: "782454470167",
  appId: "1:782454470167:web:aea73b4c750051650c8e52",
  measurementId: "G-6G25LR0RNE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)