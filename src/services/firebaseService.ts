import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCTVA1AbNnxq7tc-oKhvUsyOv01DH2bO0Y",
  authDomain: "linker-b72b2.firebaseapp.com",
  projectId: "linker-b72b2",
  storageBucket: "linker-b72b2.appspot.com",
  messagingSenderId: "364554681260",
  appId: "1:364554681260:web:97222097f97f2d52bd1809",
  measurementId: "G-87MCE77XCH"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const registerUser = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential;
};

const loginUser = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
};

const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error;
  }
};

export { registerUser, loginUser, logoutUser };
