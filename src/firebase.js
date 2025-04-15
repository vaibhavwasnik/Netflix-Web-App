import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut} 
    from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { 
    addDoc,
    collection, 
    getFirestore } 
    from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDuMdWmkgD2VWjyMd_hjcs4Ojuqwu-IwKk",
  authDomain: "netflix-clone-bfba2.firebaseapp.com",
  projectId: "netflix-clone-bfba2",
  storageBucket: "netflix-clone-bfba2.firebasestorage.app",
  messagingSenderId: "120892772991",
  appId: "1:120892772991:web:fed4783986d6281a67e54a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection (db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
        signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};