import { render } from '@testing-library/react';
import App from './App';
import * as scheduleApi from './api/schedule';

test('getDepartureSchedule called every 10 seconds', () => {
  const getScheduleSpy = jest.spyOn(scheduleApi, 'getDepartureSchedule');
  jest.useFakeTimers();
  render(<App />);

  expect(getScheduleSpy).toHaveBeenCalledTimes(1);

  jest.advanceTimersByTime(35000);

  expect(getScheduleSpy).toHaveBeenCalledTimes(4);
})
