import React from 'react';
import phone from '../assets/phone.png';
import Earth from '../earth/Earth';
import Mock from 'mockjs';
import './SchoolDevice.css';
import NiceLine from '../bg/NiceLine';

interface Props {
}

const data6 = Mock.mock({
  'data|6': [{
    'device|1': ['学校大门', '学校后门', '图书馆', '宿舍'],
    'status|1': ['on', 'off'],
  }]
}).data as any as any[];

const SchoolDevice: React.FC<Props> = ({}) => {
  return (
    <div className="school-device-wrap">
      <h3 className="school-device-title">校园设备</h3>
      <ul className="school-device-list">
        {data6.map((v, i) => (
          <li key={i}>
            <img src={phone} style={{ opacity: v.status === 'on' ? 1 : 0.2 }}/>
            <p>
              <span>{v.device}</span><br/>
              <span
                style={{ color: v.status === 'on' ? '#13cdaf' : '#e1c97e' }}>{v.status === 'on' ? '在线' : '离线'}</span>
            </p>
          </li>
        ))}
      </ul>
      <section style={{ background: 'radial-gradient(#1b4b9d, #0d2750)' }}>
        <Earth/>
      </section>
    </div>
  );
};

export default SchoolDevice;