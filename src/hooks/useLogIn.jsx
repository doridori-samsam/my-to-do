import { useState } from "react";
import { appAuth } from "../firebase/config";
import useAuthContext from "./useAuthContext";
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";

function useLogIn() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  async function login(email, password) {
    setError(null);
    setIsPending(true);
    try {
      const res = await signInWithEmailAndPassword(appAuth, email, password);
      const user = res.user;
      dispatch({ type: "login", payload: user });
      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  }
  return { error, isPending, login };
}

export default useLogIn;
