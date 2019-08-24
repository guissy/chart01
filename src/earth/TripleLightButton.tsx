import React from 'react';
import DoubleLightButton from './DoubleLightButton';

interface Props extends React.AllHTMLAttributes<HTMLDivElement>{
  text: string;
  value: string;
}

const TripleLightButton: React.FC<Props> = ({text, value, ...props}) => {

  return (
    <>
      <style>{`
.triple-light-btn,
.borders {
  position: absolute;
}
.border1, .border2, .border3 {
  border: 2px solid #408fd9;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-radius: 50%;
  position: absolute;
  top: 0;
  width: 94px;
  height: 94px;
}
.triple-light-btn .borders {
  transition: all 0.3s;
  transform-origin: 47px 47px;
}
.triple-light-btn:hover .borders {
  transform: rotate(0.5turn);
}
.border2 {
  transform: rotate(120deg);
}
.border3 {
  transform: rotate(-120deg);
}
.triple-light-btn .light-btn > .num {
  color: #e1c97e;
  font-weight: bold;
}

      `}</style>
      <div className="triple-light-btn" {...props}>
        <div className="borders">
          <div className="border1"/>
          <div className="border2"/>
          <div className="border3"/>
        </div>
        <DoubleLightButton text={text} value={value} style={{left:'7px',top:'7px'}}/>
      </div>
    </>
  );
};

export default TripleLightButton;