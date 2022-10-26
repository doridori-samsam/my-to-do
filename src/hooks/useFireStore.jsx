import {
  addDoc,
  collection,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useReducer } from "react";
import { appFireStore, timestamp } from "../firebase/config";

const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

function storeReducer(state, action) {
  switch (action.type) {
    case "isPending":
      return { isPending: true, document: null, success: false, error: null };
    case "addDoc":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "deleteDoc":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "updateDoc":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };

    case "error":
      return {
        isPending: false,
        document: action.payload,
        success: false,
        error: null,
      };
    default:
      return state;
  }
}

function useFireStore(transaction) {
  const [response, dispatch] = useReducer(storeReducer, initState);

  const colRef = collection(appFireStore, transaction);

  async function addDocument(doc) {
    dispatch({ type: "isPending" });
    try {
      const createdTime = timestamp.fromDate(new Date());
      const docRef = await addDoc(colRef, { ...doc, createdTime });
      dispatch({ type: "addDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  }

  async function delDocument(id) {
    dispatch({ type: "isPending" });
    try {
      const docRef = await deleteDoc(doc(colRef, id));
      dispatch({ type: "deleteDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error.messages });
    }
  }

  async function updateDocument(id, content) {
    dispatch({ type: "isPending" });
    try {
      const docRef = await updateDoc(doc(colRef, id), { ...content });
      dispatch({ type: "updateDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  }

  return { addDocument, delDocument, updateDocument, response };
}

export default useFireStore;
