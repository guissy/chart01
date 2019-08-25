import React from 'react';
import Dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import './App.css';
import LiveData from './home/LiveData';
import FamilySchool from './home/FamilySchool';
import LocationChart from './home/LocationChart';
import SchoolDevice from './home/SchoolDevice';
import TotalCounter from './home/TotalCounter';
import TodayWeekCounter from './home/TodayWeekCounter';
import DailyTable from './home/DailyTable';
import TitleBar from './home/TitleBar';

Dayjs.locale('zh-cn');

const App: React.FC = () => {
  return (
    <div className="App">
      <TitleBar />
      <div className="layout">
        <article>
          <TotalCounter/>
          <TodayWeekCounter />
          <DailyTable />
        </article>
        <article>
          <SchoolDevice />
          <LocationChart/>
        </article>
        <article>
          <FamilySchool/>
          <LiveData/>
        </article>
      </div>

      {/*<img style={{display: 'none1'}} src={design} width={1280}/>*/}
    </div>
  );
}

export default App;
