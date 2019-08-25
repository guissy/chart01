import React from 'react';
import Mock from 'mockjs';
import './DailyTable.css';

interface Props {
}

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


const DailyTable: React.FC<Props> = ({}) => {
  return (
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
  );
};

export default DailyTable;