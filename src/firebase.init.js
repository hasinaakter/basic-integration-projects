// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4VaMn0Wrbxj7JG8l-uGc_WW4F_BpHOAc",
  authDomain: "basic-integration-project.firebaseapp.com",
  projectId: "basic-integration-project",
  storageBucket: "basic-integration-project.appspot.com",
  messagingSenderId: "344155231855",
  appId: "1:344155231855:web:a742d4fa051b2980ec1f9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;