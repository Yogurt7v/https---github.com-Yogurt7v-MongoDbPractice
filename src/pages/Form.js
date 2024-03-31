
import { useEffect, useState } from "react";

export const Form = () => {
  const [person, setPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState("");
  const date = new Date();
  const dateString = date.toLocaleDateString("ru-RU");
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [problems, setProblems] = useState([]);
  const [newForm, setNewForm] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/all")
      .then((res) => res.json())
      .then((data) => setProblems(data));
  }, [setProblems, newForm]);

  useEffect(() => {
    if (newForm.length > 0) {
    fetch("http://localhost:5000/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    });}
  }, [newForm]);


  const handleSubmit = () => {
    setNewForm({
      date: dateString,
      name: person,
      phone: phone,
      problem: problem,
    });
    setPerson("");
    setPhone("");
    setProblem("");
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
          <label for="person">ФИО</label>
          <input
            type="text"
            name="person"
            onChange={(e) => setPerson(e.target.value)}
            value={person}
          />
        </div>
        <div className="LoginFormItem">
          <label for="phone">Номер телефона</label>
          <input
            type="tel"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div className="LoginFormItem">
          <label for="problem">Опишите вашу проблему</label>
          <input
          className="InputProblem"
            type="text"
            name="problem"
            onChange={(e) => setProblem(e.target.value)}
            value={problem}
          />
        </div>

        <button type="submit" onClick={handleSubmit} disabled={!btnIsActive} className="LoginBtn">
          Отправить
        </button>
      </div>
      </div>
    </div>
  );
};

export default Form;
