import React from 'react';
import './TotalCounter.css';

interface Props {
}

const TotalCounter: React.FC<Props> = ({}) => {
  return (
    <section className="num-total">
      <ul>
        <li className="num-card-vertical">
          <span className="label">教师数量</span>
          <span className="num">99</span>
        </li>
        <li className="num-card-vertical">
          <span className="label">学生数量</span>
          <span className="num">3000</span>
        </li>
        <li className="num-card-vertical">
          <span className="label">师生比</span>
          <span className="num">1:50</span>
        </li>
      </ul>
    </section>
  );
};

export default TotalCounter;