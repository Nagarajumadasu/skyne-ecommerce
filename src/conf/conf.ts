const conf = {
    firebaseAPIKey: String(import.meta.env.VITE_FIREBASE_API_KEY),
    firebaseAuthDomain: String(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
    firebaseProjectID: String(import.meta.env.VITE_FIREBASE_PROJECT_ID),
    firebaseStorageBucket: String(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
    firebaseMessageSenderID: String(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
    firebaseAppID: String(import.meta.env.VITE_FIREBASE_APP_ID)
}

export default conf;