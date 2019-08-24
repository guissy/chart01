import React from 'react';
interface Props {
}

const EarthSun: React.FC<Props> = ({}) => {
  return (
    <div>
      <style>{`
        .planet {
            width: 200px;
            height: 300px;
            position: relative;
        }
        .planet div{
            position: absolute;
        }
        .planet .sun{
          left: 20px;
          top: 0px;
          width: 160px;
          height: 160px;
          background: url(http://images2015.cnblogs.com/blog/818663/201510/818663-20151013205943538-1279197333.png) 0 0 no-repeat;
          background-size: 100%;
        }
        .planet .earth{
            opacity: 0;
            top: 42px;
            left: 97px;
            width: 6px;
            height: 6px;
            background: #fff; /*url(http://images2015.cnblogs.com/blog/818663/201510/818663-20151013205943538-1279197333.png) 0 0 no-repeat*/;
            background-size: 100%;
            border-radius: 50%;
            box-shadow: 0 0 10px #5e7bff;
            transform-origin: 3px 97px;
            animation: back 4s linear infinite;
        }
        .planet .moveY1 {
            animation: moveY1 2s ease-in-out infinite alternate;
        }
        .planet .moveY2 {
            animation: moveY2 2s ease-in-out infinite alternate;
            animation-delay: 2s;
        }
        .planet .moveY2 .earth{
            animation-delay: 2s;
        }
        @keyframes moveY1{
            to {
                transform: translateY(-120px);
            }
        }
        @keyframes moveY2{
            to {
                transform: translateY(-120px);
            }
        }
        @keyframes rotation{
            to{
                transform: rotate(1turn);
            }
        }
        @keyframes back{
            9% {
                opacity: 0;
            }
            12% {
                opacity: 1;
            }
            87% {
                opacity: 1;
            }
            90% {
                opacity: 0;
            }
            to {
                transform: rotate(1turn);
            }
        }
        .track{
            width: 188px;
            height: 68px;
            left: 6px;
            top: 45px;
            border: 1px dashed #eff3ff61;
            border-top: none;
            border-radius: 50%;
        } 
        .sun-mask {
          height: 80px !important;
          overflow-y: hidden;
        } 
        `}</style>
      <div className='planet'>
        <div className='sun'/>
        <div style={{transform: 'rotate(0deg)'}}>
          <div className='track'/>
          <div className='moveY1'>
            <div className='earth'/>
          </div>
          <div className='moveY2'>
            <div className='earth'/>
          </div>
        </div>
        <div style={{transform: 'rotate(60deg)', transformOrigin: '99px 79px'}}>
          {/*<div className='sun'/>*/}
          <div className='track'/>
          <div className='moveY1'>
            <div className='earth'/>
          </div>
          <div className='moveY2'>
            <div className='earth'/>
          </div>
        </div>
        <div style={{transform: 'rotate(-60deg)', transformOrigin: '99px 79px'}}>
          {/*<div className='sun'/>*/}
          <div className='track'/>
          <div className='moveY1'>
            <div className='earth'/>
          </div>
          <div className='moveY2'>
            <div className='earth'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarthSun;