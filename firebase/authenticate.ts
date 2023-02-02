import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
