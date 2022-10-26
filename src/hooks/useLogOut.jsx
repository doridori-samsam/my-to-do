import { useState } from "react";
import { signOut } from "firebase/auth";
import { appAuth } from "../firebase/config";
import useAuthContext from "./useAuthContext";

function useLogOut() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  async function logout() {
    setError(null);
    setIsPending(true);
    try {
      const res = await signOut(appAuth);
      dispatch({ type: "logout" });
      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  }

  return { error, isPending, logout };
}

export default useLogOut;
