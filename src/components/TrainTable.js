import React from 'react';

export function TrainTable(props) {
  return (
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
          </tr>)
        )}
        </tbody>
      </table>
    </div>
  )
}
