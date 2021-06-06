const locale = 'en';

const timeOptions = {
  timeZone: 'America/New_York',
  hour: '2-digit',
  minute: '2-digit',
}

export function formatTime(time = new Date()) {
  return new Date(time).toLocaleTimeString(locale, timeOptions);
}

export function getHours() {
  return formatTime().split(':')[0];
}

export function getMinutes() {
  return formatTime().split(':')[1];
}

export function getWeekday() {
  return new Date().toLocaleDateString(locale, { timeZone: timeOptions.timeZone, weekday: 'long'})
}

export function getDate() {
  return new Date().toLocaleDateString(locale, { timeZone: timeOptions.timeZone })
}

export function getMinutesDiff(date1, date2 = new Date()) {
  const t1 = new Date(date1);
  const t2 = new Date(date2);
  const diff = t1.getTime() - t2.getTime();

  return Math.round(diff / 60000)
}
