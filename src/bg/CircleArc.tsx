import React from 'react';
import './CircleArc.css';
import line3 from '../assets/line3.svg';

interface Props {
}

/** header bg */
const CircleArc: React.FC<Props> = ({}) => {
  return (
    <div className="arc-box">
      <div className="arc-wrap">
        <div className="arc1"/>
        <div className="arc2"/>
        <div className="arc3"/>
        <div className="arc4"/>
        {
          Array(14).fill(0).map((_, i) =>
            <div key={i} className="rect1" style={{ transform: 'translateX(49px) rotate(' + i * 12 + 'deg)' }}/>)
        }
        <div className="arc5"/>
      </div>
      <img src={line3}/>
      <img src={line3} className="right"/>
    </div>
  );
};

export default CircleArc;