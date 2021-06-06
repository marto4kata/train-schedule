import { useEffect, useState } from 'react';
import { TrainTable } from './components/TrainTable';
import { StationInfo } from './components/StationInfo';
import { getDepartureSchedule } from './api/schedule';
import './App.css';

const station = {
  name: 'North Station',
  value: 'place-north',
};

function App() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    getDepartureSchedule(station.value).then(data => setSchedule(data));

    const interval = setInterval(() => {
      getDepartureSchedule(station.value).then(data => setSchedule(data))
    }, 10000);

    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <StationInfo stationName={station.name}/>
      <TrainTable data={schedule}/>
    </>
  )
}

export default App;
