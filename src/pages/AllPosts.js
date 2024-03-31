import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllPosts.css";

export const AllPosts = () => {

    const [problems, setProblems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all")
          .then((res) => res.json())
          .then((data) => setProblems(data));
      }, [setProblems]);

    return (
        <div className="AllPosts">
            
            <table className="table">
                <thead className="thead-dark">
                    <th>Дата отправки</th>
                    <th>ФИО</th>
                    <th>телефон</th>
                    <th>Проблема</th>
                </thead>

                <tbody className="tbody">
                    {problems.map((problem) => (
                        <tr key={problem._id} className="tr">
                            <td className="td">{problem.date}</td>
                            <td>{problem.name}</td>
                            <td>{problem.phone}</td>
                            <td>{problem.problem}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/form" className="problem">Добавить проблему</Link> 
        </div>
    );
}

export default AllPosts