import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Form = ({ problems }) => {
  const [person, setPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [problem, setProblem] = useState('');
  const date = new Date();
  const dateString = date.toLocaleDateString('ru-RU');
  const [btnIsActive, setBtnIsActive] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (dateString, person, phone, problem) => {
    setBtnIsActive(!btnIsActive);

    const formData = {
      date: dateString,
      name: person,
      phone: phone,
      problem: problem,
    };

    try {
      const response = await fetch('http://localhost:5000/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setPerson('');
        setPhone('');
        setProblem('');
        navigate('/all');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      alert('Ошибка сервера');
    }
  };

  useEffect(() => {
    setBtnIsActive(person.length && phone.length && problem.length);
  }, [person, phone, problem]);

  return (
    <div className="LoginWrapper">
      <div className="LoginForm">
        <div className="title">
          <h1>Запись к врачу</h1>
        </div>
        <div className="LoginFormItem">
          <div className="LoginFormItem">
            <label htmlFor="person">ФИО</label>
            <input
              type="text"
              name="person"
              onChange={(e) => setPerson(e.target.value)}
              value={person}
            />
          </div>
          <div className="LoginFormItem">
            <label htmlFor="phone">Номер телефона</label>
            <input
              type="tel"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="LoginFormItem">
            <label htmlFor="problem">Опишите вашу проблему</label>
            <input
              className="InputProblem"
              type="text"
              name="problem"
              onChange={(e) => setProblem(e.target.value)}
              value={problem}
            />
          </div>

          <button
            type="submit"
            onClick={() => handleSubmit(dateString, person, phone, problem)}
            disabled={!btnIsActive}
            className="LoginBtn"
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
