import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCrOShSq4vS2ZsKLnOeNTDl-63lV35K_LU",
  authDomain: "netflix-10df7.firebaseapp.com",
  projectId: "netflix-10df7",
  storageBucket: "netflix-10df7.appspot.com",
  messagingSenderId: "700152186532",
  appId: "1:700152186532:web:7554639fcb4f6c251c8831",
  measurementId: "G-S2T53YLPXE",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
