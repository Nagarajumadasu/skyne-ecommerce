import conf from "@/conf/conf";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: conf.firebaseAPIKey,
  authDomain: conf.firebaseAuthDomain,
  projectId: conf.firebaseProjectID,
  storageBucket: conf.firebaseStorageBucket,
  messagingSenderId: conf.firebaseMessageSenderID,
  appId: conf.firebaseAppID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);