import { Routes, Route } from "react-router-dom";
import Login from "./LoginForm";
import RegisterForm from "./RegisterForm";
import TodoContent from "./TodoContent";
import PageNotFound from "./PageNotFound";

export default function Routing({ deleteTodo, editTodo, displayTodo }) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <TodoContent
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              displayTodo={displayTodo}
            />
          }
        />
        <Route path="/Login_page" element={<Login />} />
        <Route path="/Register_page" element={<RegisterForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
