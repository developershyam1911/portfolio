import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYLc0dZmCggbCkGCSMt4l1iS8iehChnNQ",
  authDomain: "portfolio-24d37.firebaseapp.com",
  projectId: "portfolio-24d37",
  storageBucket: "portfolio-24d37.appspot.com",
  messagingSenderId: "230119596584",
  appId: "1:230119596584:web:477daa9cc08d59025bcb1d"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const init = {
    db,
    storage,
    app,
    auth
}
export default init;