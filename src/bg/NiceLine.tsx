import React from 'react';
import './Niceline.css';
import line_circle4 from '../assets/line_circle4.svg';
interface Props {
}

const NiceLine: React.FC<Props> = ({}) => {
  return (
      <div className="nice-line">
        <img src={line_circle4} />
      </div>
  );
};

export default NiceLine;