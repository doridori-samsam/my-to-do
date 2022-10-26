import useAuthContext from "../../hooks/useAuthContext";
import ToDoPage from "../toDoPage/ToDoPage";
import LogIn from "../logIn/LogIn";

function Home() {
  const { user } = useAuthContext();
  return <>{user ? <ToDoPage /> : <LogIn />}</>;
}

export default Home;
