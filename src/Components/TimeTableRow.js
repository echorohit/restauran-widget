import React from 'react';
import './TimeTable.scss'
import { isToday, chunkArray } from '../helpers/schedule'
const TimeTableRow = (props) => {
  const { timings } = props
  return (<div className="timetable-container__table-row" key={timings.day}>
    <div className="timetable-container__table-day">
      {timings.day}
      {isToday(timings.day) && <span className="today-text">&nbsp;&nbsp;today</span>}
    </div>
    {timings.close && <div className="timetable-container__table-schedeule disable-text">Closed</div>}
    {!timings.close && <div className="timetable-container__table-schedeule ">{chunkArray(timings.time).map(e => e.join(' - '))}</div>}
  </div>)
}

export default TimeTableRow