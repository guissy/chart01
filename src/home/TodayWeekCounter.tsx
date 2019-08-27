import React from 'react';
import user from '../assets/user.png';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Mock from 'mockjs';
import './TodayWeekCounter.css'

interface Props {
}

const data = Mock.mock({
  'data|7': [{
    'rate|60-99': 1,
    'rate_name': '80%',
    'name|+1': ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  }]
}).data;

const TodayWeekCounter: React.FC<Props> = ({}) => {
  return (
    <section className="today-user-daily-wrap">
      <h2 className="today-user-daily-title">今日考勤情况</h2>
      <ul className="today-user-daily">
        <li>
          <span className="label">出勤人数</span>
          <div className="user-10">
            {[1, 2, 3, 4, 5, 6].map(v => (
              <img key={v} src={user} className="user-one"/>
            ))}
          </div>
          <span className="user-num">153</span>
        </li>
        <li>
          <span className="label">迟到人数</span>
          <div className="user-10">
            {[1, 2, 3, 4, 5].map(v => (
              <img key={v} src={user} className="user-one"/>
            ))}
          </div>
          <span className="user-num">23</span>
        </li>
        <li>
          <span className="label">缺勤人数</span>
          <div className="user-10">
            {[1, 2, 3, 4, 5].map(v => (
              <img key={v} src={user} className="user-one"/>
            ))}
          </div>
          <span className="user-num">21</span>
        </li>
        <li>
          <span className="label">请假人数</span>
          <div className="user-10">
            {[1, 2, 3, 4].map(v => (
              <img key={v} src={user} className="user-one"/>
            ))}
          </div>
          <span className="user-num">23</span>
        </li>
        <li>
          <span className="label">早退人数</span>
          <div className="user-10">
            {[1, 2, 3, 4].map(v => (
              <img key={v} src={user} className="user-one"/>
            ))}
          </div>
          <span className="user-num">14</span>
        </li>
      </ul>
      <div className="week-normal-rate">
        <h3>一周考勤正常率</h3>
        <LineChart width={410} height={130} data={data} margin={{ top: 5, right: 30, bottom: 5, left: -15 }}>
          <CartesianGrid stroke="#31487a" strokeDasharray="5 0" vertical={false}/>
          <Line type="monotone" dataKey="rate" stroke="#fff" strokeWidth={2} opacity={0.3}/>
          <Line type="monotone" dataKey="rate" stroke="#fff" strokeWidth={4} opacity={0.15}/>
          <Line type="monotone" dataKey="rate" stroke="#13cdaf" fill="#13cdaf"/>
          <XAxis dataKey="name" stroke="#fff" axisLine={false} tickLine={false}/>
          <YAxis stroke="#fff" dataKey="rate" axisLine={false} tickLine={false} unit="%"/>
          <Tooltip/>
        </LineChart>
      </div>
    </section>
  );
};

export default TodayWeekCounter;