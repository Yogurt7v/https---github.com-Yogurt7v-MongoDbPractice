import "./App.css";
import AllPosts from "./pages/AllPosts";
import Form from "./pages/Form";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/all" element={<AllPosts />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  );
}

export default App;
