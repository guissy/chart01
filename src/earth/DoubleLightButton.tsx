import React, { CSSProperties } from 'react';

interface Props extends React.AllHTMLAttributes<HTMLDivElement>{
  text: string;
  value: string;
}

const DoubleLightButton: React.FC<Props> = ({text, value, ...props}) => {
  const {transform, ...style} = props.style as CSSProperties;
  return (
    <>
      <style>{`
.light-btn {
  position: absolute;
  width: 80px;
  height: 80px;
}
.light-btn::before,
.light-btn::after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: inset 0 0 10px #4d83d5;
  z-index: 0;
  pointer-events: none;
  transition: filter 0.2s;
}    
.light-btn[title=${text}]::before,
.light-btn[title=${text}]::after {
  transform: ${transform||'none'};
}  
.light-btn::after {
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
}
.light-btn:hover::before,
.light-btn:hover::after {
  filter: contrast(1.5) brightness(1.8) hue-rotate(-30deg);
}
.light-btn > .label {
  display: block;
  word-break: keep-all;
  padding-top: 20px;
  font-size: 12px;
  width: 84px;
  text-align: center;
  z-index: 1;
  transition: all 0.3s;
}
.light-btn > .num {
  display: block;
  text-align: center;
  font-size: 18px;
  line-height: 28px;
  color: #20ceef;
  z-index: 1;
  transition: all 0.3s;
}
.light-btn:hover > .label {
  font-weight: 900;
  text-shadow: 0 0px 1px #fff;
  width: 90px;
  letter-spacing: 1px;
  margin-left: -4px;
}
.light-btn:hover > .num {
  font-weight: 900;
  transform: scale(1.1);
}
      `}</style>
      <div className="light-btn" style={style} title={text}>
        <span className="label">{text}</span>
        <span className="num">{value}</span>
      </div>
    </>
  );
};

export default DoubleLightButton;