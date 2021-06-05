import { formatTime, getMinutesDiff } from '../utils/date';

function getDestination(route, directionId) {
  return route?.attributes?.direction_destinations?.[directionId];
}

function getStatus(status, predictedTime, scheduledTime) {
  if (status && status !== 'On time') return status;

  const minutesLate = getMinutesDiff(predictedTime, scheduledTime);

  return minutesLate > 0 ? `${minutesLate} min late` : 'On time';
}

function serializeSchedule({ data = [], included = []}, limit) {
  return data
    .filter(prediction => prediction.attributes?.departure_time)      // get only departures
    .filter(prediction => getMinutesDiff(prediction.attributes?.departure_time) > -1) // filter the ones already departure
    .map(({ id, attributes, relationships }) => {
      const { departure_time, direction_id, status } = attributes || {};

      const routeId = relationships?.route?.data?.id;
      const trainId = relationships?.vehicle?.data?.id;
      const scheduleId = relationships?.schedule?.data?.id;

      const route = included.find(include => include.id === routeId);
      const schedule = included.find(include => include.id === scheduleId);

      const time = schedule?.attributes?.departure_time || departure_time;
      const scheduleStatus = getStatus(status, departure_time, time);

      return {
        id,
        trainId,
        time,
        status: scheduleStatus,
        line: route?.attributes.long_name,
        destination: getDestination(route, direction_id),
      }
    })
    .sort((a, b) => new Date(a.time) - new Date(b.time))
    .slice(0, limit)
    .map(schedule => ({...schedule, time: formatTime(schedule.time)}))
}

export async function getDepartureSchedule(place, limit = 10) {
  const res = await fetch(`https://api-v3.mbta.com/predictions?include=route,schedule&filter[stop]=${place}`).then(r => r.json());

  return serializeSchedule(res, limit);
}
