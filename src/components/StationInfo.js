import React, { useEffect, useState } from 'react';
import { getDate, getHours, getMinutes, getWeekday } from '../utils/date';

export function StationInfo({ stationName }) {
  const [date, setDate] = useState(getDate());
  const [weekday, setWeekday] = useState(getWeekday());
  const [hours, setHours] = useState(getHours());
  const [minutes, setMinutes] = useState(getMinutes());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getDate());
      setWeekday(getWeekday());
      setHours(getHours());
      setMinutes(getMinutes());
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="header">
      <div>
        <h4>{weekday}</h4>
        <h4>{date}</h4>
      </div>
      <div>
        <h4>{stationName}</h4>
      </div>
      <div>
        <h4>Current Time</h4>
        <h4>
          <span>{hours}</span>
          <span className="separator">:</span>
          <span>{minutes}</span>
        </h4>
      </div>
    </div>
  )
}
