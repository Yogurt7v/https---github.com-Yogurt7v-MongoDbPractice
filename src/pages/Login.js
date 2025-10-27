import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginSubmit = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        navigate('/form');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Ошибка при логине:', error);
      alert('Ошибка сервера');
    }
  };

  return (
    <div className="LoginWrapper">
      <div className="title">
        <h1>Login</h1>
      </div>
      <div className="LoginForm">
        <div className="LoginFormItem">
          <label htmlFor="email">Электронная почта</label>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="LoginFormItem">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="LoginFormItem">
          <button
            className="LoginBtn"
            type="submit"
            disabled={!email.length || !password.length}
            onClick={() => loginSubmit(email, password)}
          >
            Войти
          </button>
        </div>
        <div className="LoginFormItem">
          <Link to="/register">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
