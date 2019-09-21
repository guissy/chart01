import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import Mock from 'mockjs';
import './FamilySchool.css';

const hours = Mock.Random.range(4, 24, 4) as any as number[];
const data3 = Mock.mock({
  'data|6': [{
    'name': hours.map(t => '05/' + t ),
    'notice|1-99': 1,
    'homework|1-99': 1,
    'class|1-99': 1,
    'grow|1-99': 1,
  }]
}).data;
const data4 = [
  {name: 'notice', value: Mock.Random.integer(1, 99), fill: "#e54df8"},
  {name: 'homework', value: Mock.Random.integer(1, 99), fill: "#01ccfe"},
  {name: 'class', value: Mock.Random.integer(1, 99), fill: "#02ffd0"},
  {name: 'grow', value: Mock.Random.integer(1, 99), fill: "#e1c97e"},
];

const FamilySchool: React.FC = () => {
  return (
    <section className="school-parent-wrap">
      <section className="school-parent-total">
        <h3 className="school-parent-title">家校互动</h3>
        <ul>
          <li className="school-parent-card">
            <h4>家校通知</h4>
            <dl>
              <dt className="label">推送次数</dt>
              <dd className="num">13492</dd>
              <dt className="label">查看次数</dt>
              <dd className="num">3147931</dd>
            </dl>
          </li>
          <li className="school-parent-card">
            <h4>课后作业</h4>
            <dl>
              <dt className="label">推送次数</dt>
              <dd className="num">13492</dd>
              <dt className="label">查看次数</dt>
              <dd className="num">3147931</dd>
            </dl>
          </li>
          <li className="school-parent-card">
            <h4>班级动态</h4>
            <dl>
              <dt className="label">发布次数</dt>
              <dd className="num">13492</dd>
            </dl>
          </li>
          <li className="school-parent-card">
            <h4>成长记录</h4>
            <dl>
              <dt className="label">发布次数</dt>
              <dd className="num">13492</dd>
            </dl>
          </li>
        </ul>
      </section>
      <section className="school-parent-chart">
        <div className="school-parent-daily">
          <h4>家校互动趋势</h4>
          <LineChart
            width={220}
            height={140}
            data={data3}
            margin={{
              top: 5, bottom: 5, left: -30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey="name" stroke="#fff"/>
            <YAxis tickCount={7} stroke="#fff" />
            <Tooltip />
            <Legend verticalAlign="top" formatter={val => ({ 'notice': '家校通知', 'homework': '课后作业', 'class': '班级动态', 'grow': '成长记录' } as Record<string, string>)[val]}/>
            <Line type="monotone" dataKey="notice" stroke="#e54df8" activeDot={{ r: 4 }} />
            <Line type="monotone" dataKey="homework" stroke="#01ccfe" activeDot={{ r: 4 }} />
            <Line type="monotone" dataKey="class" stroke="#02ffd0" activeDot={{ r: 4 }} />
            <Line type="monotone" dataKey="grow" stroke="#e1c97e" activeDot={{ r: 4 }} />
          </LineChart>
        </div>
        <div className="school-parent-pie">
          <h4>家校互动类型占比</h4>
          <PieChart width={184} height={140} style={{ marginLeft: '-6px' }}>
            <Pie data={data4} dataKey="value"
                 nameKey="name" cx="50%"
                 cy="50%"
                 innerRadius={21}
                 outerRadius={35}
                 strokeWidth={0}
                 fill="#01ccfe"/>
            <Legend
              align="right"
              verticalAlign="middle"
              layout="vertical"
              formatter={val => ({ 'notice': '家校通知', 'homework': '课后作业', 'class': '班级动态', 'grow': '成长记录' } as Record<string, string>)[val]}
              wrapperStyle={{ transform: 'scale(0.7)' }}/>
          </PieChart>
        </div>
      </section>
    </section>
  );
};

export default FamilySchool;
