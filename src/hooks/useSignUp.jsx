import { useState } from "react";
import { appAuth } from "../firebase/config";
import useAuthContext from "./useAuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";

function useSignUp() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  async function signUp(email, password) {
    setError(null);
    setIsPending(true);
    try {
      const res = await createUserWithEmailAndPassword(
        appAuth,
        email,
        password
      );
      const user = res.user;
      setIsPending(false);
      dispatch({ type: "login", payload: user });
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  }
  return { error, isPending, signUp };
}

export default useSignUp;
