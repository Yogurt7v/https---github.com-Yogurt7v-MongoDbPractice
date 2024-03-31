import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(email, password) => {
    await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
  
    navigate("/");
  };


  return (
    <div className="LoginWrapper">
      <div className="title">
        <h1>Регистрация</h1>
      </div>
      <div className="LoginForm">
        <div className="LoginFormItem">
          <label for="e">Электронная почта</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="LoginFormItem">
          <label for="password">Пароль</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="LoginBtn"
          type="submit"
          disabled={!email.length || !password.length}
          onClick={() => handleSubmit(email, password)}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};
export default Register;
