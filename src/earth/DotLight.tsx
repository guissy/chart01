import React from 'react';

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
}

const DotLight: React.FC<Props> = (props) => {
  return (
      <>
        <style>{`

.ball-scale-multiple {
    position: relative;
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
}
.ball-scale-multiple>div {
    background-color: #fff;
    border-radius: 100%;
}
.ball-scale-multiple>div {
    position: absolute;
    left: -30px;
    top: 0;
    opacity: 0;
    margin: 0;
    width: 60px;
    height: 60px;
    -webkit-animation: ball-scale-multiple 1s 0s linear infinite;
    animation: ball-scale-multiple 1s 0s linear infinite; 
}
.ball-scale-multiple>div:nth-child(2) {
    -webkit-animation-delay: -.4s;
    animation-delay: -.4s
}

.ball-scale-multiple>div:nth-child(3) {
    -webkit-animation-delay: -.2s;
    animation-delay: -.2s
}
@keyframes ball-scale-multiple {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 0
    }

    5% {
        opacity: 1
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0
    }
}
        `}</style>
        <div className="ball-scale-multiple" {...props}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
  );
};

export default DotLight;