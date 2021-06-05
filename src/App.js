import './App.css';
import ScheduleTable from '../src/components/ScheduleTable';
import { getDepartureSchedule } from './api/schedule';
import { useEffect, useState } from "react";
import { getDate, getWeekday, formatTime } from "./utils/date";

function App() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(getDate());
  const [weekday, setWeekday] = useState(getWeekday());
  const [time, setTime] = useState(formatTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getDate());
      setWeekday(getWeekday());
      setTime(formatTime())
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    getDepartureSchedule("place-north").then(data => setSchedule(data));

    const interval = setInterval(() => {
      getDepartureSchedule("place-north").then(data => setSchedule(data))
    }, 10000);

    return () => clearInterval(interval);
  }, [])

  return <ScheduleTable data={schedule} weekday={weekday} date={date} time={time}/>;
}

export default App;
