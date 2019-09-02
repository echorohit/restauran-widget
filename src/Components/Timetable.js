import React from 'react';
import './TimeTable.scss'
import TimeTableRow from './TimeTableRow'

const getRows = (schedeule) => {
  let rows = [];
  schedeule.forEach(element => {
    rows.push(
      <TimeTableRow timings={element}></TimeTableRow>
    )
  });
  return rows;
}

const TimeTable = (props) => {
  const { schedule } = props
  return (
    <div className="timetable-container">
      <div className="timetable-container__header">
        <span>&#128345;</span><span>&nbsp;&nbsp;Opening Hours</span>
      </div>
      <div className="timetable-container__table">
        {getRows(schedule)}
      </div>
    </div>
  )
}

export default TimeTable