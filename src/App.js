import "./App.css";
import AllPosts from "./pages/AllPosts";
import Form from "./pages/Form";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import { useEffect, useState } from "react";

function App() {

  const [problems, setProblems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all")
      .then((res) => res.json())
      .then((data) => setProblems(data));
  }, [setProblems, problems]);

  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<Form problems={problems} />} />
        <Route path="/all" element={<AllPosts problems={problems}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
  );
}

export default App;
