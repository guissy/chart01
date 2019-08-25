import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import Mock from 'mockjs';
import './LocationChart.css';

interface Props {
}
const hours = Mock.Random.range(4, 24, 4) as any as number[];

const studentTeacherParent = [
  { name: '学生', value: 500 },
  { name: '老师', value: 400 },
  { name: '家长', value: 100 }
];

const data2 = Mock.mock({
  'data|5': [{
    'name': hours.map(t => t + ':00'),
    'gate|66-99': 1,
    'room|60-99': 1,
    'lib|60-99': 1,
  }]
}).data as any as any[];

data2.unshift({
  name: '0:00',
  gate: 0,
  room: 0,
  lib: 0,
})

const LocationChart: React.FC<Props> = ({}) => {
  return (
    <section className="school-safe-wrap">
      <h3 className="school-safe-title">校园安全数据</h3>
      <div className="school-safe">
        <div>
          <h4 style={{ textIndent: '10px' }}>人群出入比例统计</h4>
          <PieChart width={190} height={162} style={{ marginLeft: '-25px' }}>
            <Pie data={studentTeacherParent.slice(0, 1)} startAngle={60} endAngle={240} dataKey="value"
                 nameKey="name" cx="50%"
                 cy="50%"
                 innerRadius={19}
                 outerRadius={55}
                 strokeWidth={0}
                 fill="#01ccfe"/>
            <Pie data={studentTeacherParent.slice(1, 2)} startAngle={240} endAngle={280} dataKey="value"
                 nameKey="name" cx="50%"
                 cy="50%"
                 innerRadius={19}
                 outerRadius={31}
                 strokeWidth={0}
                 fill="#e54df8"/>
            <Pie data={studentTeacherParent.slice(2, 3)} startAngle={280} endAngle={420} dataKey="value"
                 nameKey="name" cx="50%"
                 cy="50%"
                 innerRadius={19}
                 outerRadius={43}
                 strokeWidth={0}
                 fill="#02ffd0"/>
            <Legend verticalAlign="top" wrapperStyle={{ transform: 'scale(0.7)' }}/>
          </PieChart>
        </div>
        <div style={{ margin: '0 0 0 -50px' }}>
          <h4 style={{ textIndent: '30px' }}>各位置出入次</h4>
          <AreaChart
            width={320}
            height={150}
            data={data2}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
            <XAxis dataKey="name" stroke="#fff"/>
            <YAxis tickCount={7} stroke="#fff"/>
            <Tooltip/>
            <Area type="monotone" dataKey="gate" stackId="1" stroke="#01ccfe" fill="#01ccfe"/>
            <Area type="monotone" dataKey="room" stackId="1" stroke="#e54df8" fill="#e54df8"/>
            <Area type="monotone" dataKey="lib" stackId="1" stroke="#02ffd0" fill="#02ffd0"/>
            <Legend
              verticalAlign="top"
              formatter={val => ({ 'gate': '校门', 'room': '宿舍', 'lib': '图书馆' } as Record<string, string>)[val]}
              wrapperStyle={{ transform: 'scale(0.7)' }}/>

          </AreaChart>
        </div>
      </div>
    </section>
  );
};

export default LocationChart;