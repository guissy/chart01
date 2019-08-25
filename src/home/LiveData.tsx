import React from 'react';
import Mock from 'mockjs';
import Dayjs from 'dayjs';
import './LiveData.css';

interface Props {
}
const data5 = Mock.mock({
  'data|6': [{
    'name': '@cname',
    'op|1': ['发布了一个通知', '布置了一个作业'],
    'createAt': '@date',
  }]
}).data as any as any[];

const LiveData: React.FC<Props> = ({}) => {
  return (
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
  );
};

export default LiveData;