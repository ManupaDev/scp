import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "./init";

const auth = getAuth(app);

export const signUpUser = async (email: string, password: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (err) {
    console.log(err);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("logged out");
  } catch (err) {
    console.log(err);
  }
};
