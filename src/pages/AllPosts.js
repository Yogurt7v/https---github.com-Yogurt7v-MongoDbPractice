import { Link } from 'react-router-dom';
import './AllPosts.css';

export const AllPosts = ({ problems }) => {
  return (
    <div className="AllPosts">
      <div className="table">
        <div className="thead-dark">
          <div>Дата отправки</div>
          <div>ФИО</div>
          <div>Телефон</div>
          <div>Проблема</div>
        </div>
        <div className="tbody">
          {problems.map((problem) => (
            <div key={problem._id} className="tr">
              <div className="td">{problem.date}</div>
              <div className="td">{problem.name}</div>
              <div className="td">{problem.phone}</div>
              <div className="td">{problem.problem}</div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/form" className="problem">
        Добавить проблему
      </Link>
    </div>
  );
};

export default AllPosts;
