import React from 'react';
import Dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import './App.css';
import design from './assets/design.jpg';
import phone from './assets/phone.png';
import user from './assets/user.png';
import Mock from 'mockjs';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import Earth from './earth/Earth';

const data = Mock.mock({
  'data|7': [{
    'rate|60-99': 1,
    'rate_name': '80%',
    'name|+1': ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  }]
}).data;

const tableData = Mock.mock({
  'data|5': [{
    'name': '5(' + Mock.Random.integer(1, 5) + ')班',
    'rate|66-99': 1,
    'normal|60-99': 1,
    'empty|1-19': 1,
    'late|1-19': 1,
    'early|1-19': 1,
  }]
}).data as any as any[];


const studentTeacherParent = [
  { name: '学生', value: 500 },
  { name: '老师', value: 400 },
  { name: '家长', value: 100 }];
const hours = Mock.Random.range(4, 24, 4) as any as number[];
const data2 = Mock.mock({
  'data|5': [{
    'name': hours.map(t => t + ':00'),
    'gate|66-99': 1,
    'room|60-99': 1,
    'lib|60-99': 1,
  }]
}).data as any as any[];
console.log('☞☞☞ 9527 App 55', data2);
data2.unshift({
  name: '0:00',
  gate: 0,
  room: 0,
  lib: 0,
})
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
const data5 = Mock.mock({
  'data|6': [{
    'name': '@cname',
    'op|1': ['发布了一个通知', '布置了一个作业'],
    'createAt': '@date',
  }]
}).data as any as any[];
const data6 = Mock.mock({
  'data|6': [{
    'device|1': ['学校大门', '学校后门', '图书馆', '宿舍'],
    'status|1': ['on', 'off'],
  }]
}).data as any as any[];



Dayjs.locale('zh-cn');
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-header-time">
          <span className="App-header-week">{Dayjs(Date.now()).format('dddd')}</span>
          <time className="App-header-now">{Dayjs(Date.now()).format('YYYY/MM/DD hh:mm')}</time>
        </span>
        <h1 className="App-header-title">智慧校园大数据中心</h1>
        <div className="App-header-weather">
          <span className="App-header-weather-text">多云</span>
          <span>10 ~ 13℃</span>
        </div>
      </header>
      <div className="layout">
        <article>
          <section className="num-total">
            <ul>
              <li className="num-card-vertical">
                <span className="label">教师数量</span>
                <span className="num">99</span>
              </li>
              <li className="num-card-vertical">
                <span className="label">学生数量</span>
                <span className="num">3000</span>
              </li>
              <li className="num-card-vertical">
                <span className="label">师生比</span>
                <span className="num">1:50</span>
              </li>
            </ul>
          </section>
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
              <LineChart width={410} height={150} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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
          <section className="every-class-wrap">
            <h3 className="every-class-wrap-title">一周考勤正常率</h3>
            <table className="every-class">
              <thead>
              <tr>
                <th>班级名称</th>
                <th>正常率</th>
                <th>正常</th>
                <th>缺勤</th>
                <th>迟到</th>
                <th>早退</th>
              </tr>
              </thead>
              <tbody>
              {tableData.map((v, i) => (
                <tr key={i}>
                  <td className="grade-name">{v.name}</td>
                  <td className="grade-rate">{v.rate.toFixed(1) + '%'}</td>
                  <td>{v.normal}</td>
                  <td>{v.empty}</td>
                  <td>{v.late}</td>
                  <td>{v.early}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </section>
        </article>
        <article>
          <div className="school-device-wrap">
            <h3 className="school-device-title">校园设备</h3>
            <ul className="school-device-list">
              {data6.map((v, i) => (
                <li key={i}>
                  <img src={phone} style={{opacity: v.status==='on'?1:0.2}}/>
                  <p>
                    <span>{v.device}</span><br/>
                    <span style={{color: v.status==='on'?'#13cdaf':'#e1c97e'}}>{v.status==='on'?'在线':'离线'}</span>
                  </p>
                </li>
              ))}
            </ul>
            <section style={{background: 'radial-gradient(#1b4b9d, #0d2750)'}}>
              <Earth />
            </section>
          </div>
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
                  <XAxis dataKey="name"/>
                  <YAxis tickCount={7}/>
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
        </article>
        <article>
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
                  <XAxis dataKey="name" />
                  <YAxis tickCount={7} />
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
          <section>
            <section className="live-event-wrap">
              <h3 className="live-event-title">实时数据</h3>
              <ul className="live-event">
                {
                  data5.map((v, i) => (
                    <li key={i}>
                      <div>
                        <img className="avatar" src={Mock.Random.image('60x60', '', '', '', 'user')} />
                        <div className="title">
                          <h4>{v.name}老师</h4>
                          <h5>{v.op}</h5>
                        </div>
                      </div>
                      <time>{Dayjs(v.createAt, {format: 'hh:mm:ss'}).format('MM-DD hh:mm')}</time>
                    </li>
                  ))
                }
              </ul>
            </section>
          </section>
        </article>
      </div>

      {/*<img style={{display: 'none1'}} src={design} width={1280}/>*/}
    </div>
  );
}

export default App;
