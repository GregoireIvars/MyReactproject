import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

let db = false;

export const getDb = () => {
    if (!db ) {
        const firebaseConfig = {
            apiKey: "AIzaSyASbwm8SgH_ogIaNAdTRR5I2BdLb5oQbOw",
            authDomain: "my-app-react-52480.firebaseapp.com",
            projectId: "my-app-react-52480",
            storageBucket: "my-app-react-52480.appspot.com",
            messagingSenderId: "19721775256",
            appId: "1:19721775256:web:2e463e91f61ef790bf88ed",
            measurementId: "G-WF49SCJ3D4"
        }
        
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
    }
    return db;
}

