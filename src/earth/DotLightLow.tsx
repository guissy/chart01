import React from 'react';

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  delay: number;
}

const DotLightLow: React.FC<Props> = ({delay, ...props}) => {
  return (
      <>
        <style>{`
.ball-scale {
  position: relative;
}
.ball-scale>div:first-child  {
    height: 60px;
    width: 60px;
    animation: ball-scale 1s 0s ease-in-out infinite;
    background-color: #fff;
    border-radius: 100%;
    margin: 2px;
    display: inline-block;
}
.ball-scale>div:last-child {
    height: 32px;
    width: 32px;
    position: absolute;
    top: 16px;
    left: 16px;
    border-radius: 100%;
    border: 2px solid #fff;
    animation: ball-scale-ripple 1s 0s infinite cubic-bezier(.21,.53,.56,.8);
}
@keyframes ball-scale {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0
    }
}

@keyframes ball-scale-ripple {
    0% {
        -webkit-transform: scale(.1);
        transform: scale(.1);
        opacity: 1
    }

    70% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: .7
    }

    100% {
        opacity: 0
    }
}
        `}</style>
        <div className="ball-scale" {...props}>
          <div style={{animationDelay: delay+'ms'}}></div>
          <div style={{animationDelay: delay+'ms'}}></div>
        </div>
      </>
  );
};

export default DotLightLow;