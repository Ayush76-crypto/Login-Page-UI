const firebaseConfig = {
    apiKey: "AIzaSyAsk5QhHKVVkAOTLfAVYraVIiOglZd4ovI",
    authDomain: "disneyplus-clone-6f0c0.firebaseapp.com",
    projectId: "disneyplus-clone-6f0c0",
    storageBucket: "disneyplus-clone-6f0c0.appspot.com",
    messagingSenderId: "758118028541",
    appId: "1:758118028541:web:cdfd473d869defb9db9a94",
    measurementId: "G-DLCRPKWG40"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;