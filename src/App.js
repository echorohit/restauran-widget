import React from 'react';
import './App.scss';
import TimeTable from './Components/Timetable'
import { getSchedule } from './helpers/schedule'
import { mockData } from './mock'

function App() {
  return (
    <div className="App">
      <TimeTable schedule={getSchedule(mockData)}></TimeTable>
    </div>
  );
}

export default App;
