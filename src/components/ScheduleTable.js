import React from 'react';

export default function ScheduleTable(props) {
  return (
    <div>
      <div className="header">
        <div>
          <h4>{props.weekday}</h4>
          <h4>{props.date}</h4>
        </div>
        <div>
          <h4>North Station Information</h4>
        </div>
        <div>
          <h4>Current Time</h4>
          <h4>{props.time}</h4>
        </div>
      </div>
      <div>
        <table>
          <thead>
          <tr>
            <th>Time</th>
            <th>Destination</th>
            <th>Train</th>
            <th>Line</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
          {props.data?.map(train => (
            <tr key={train.id}>
              <td>{train.time}</td>
              <td>{train.destination}</td>
              <td>{train.trainId || 'TBD'}</td>
              <td>{train.line}</td>
              <td>{train.status}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
