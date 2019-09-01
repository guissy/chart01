import React from 'react';
import Dayjs from 'dayjs';
import './TitleBar.css';
import clock from '../assets/clock.png';
import CircleArc from '../bg/CircleArc';

interface Props {
}

const TitleBar: React.FC<Props> = ({}) => {
  return (
    <header className="App-header">
        <CircleArc />
        <span className="App-header-time">
          <img className="App-header-clock" src={clock}/>
          <span className="App-header-week">{Dayjs(Date.now()).format('dddd')}</span>
          <time className="App-header-now">{Dayjs(Date.now()).format('YYYY/MM/DD hh:mm')}</time>
        </span>
      <h1 className="App-header-title">智慧校园大数据中心</h1>
      <div className="App-header-weather">
        <span className="App-header-weather-text">多云</span>
        <span>10 ~ 13℃</span>
      </div>
    </header>
  );
};

export default TitleBar;