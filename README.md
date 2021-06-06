# Train schedule

Displays information about the trains that are about to depart North station in Boston.

## Data flow

There are two UI components TrainTable for displaying trains about to departure and StationInfo - for displaying time and name.
I used setIntervals to update the time - clock updating every second in StationTime and to update the data (getDepartureSchedule) every 10 seconds. I used useEffect hook to initialize the intervals and returned a function for clearing the interval on the component unmount.

Updating the clock happens every second and for that, I created using getDate, getWeekday, getHours, getMinutes functions. I used built-in date functions. The tricky part was to pass the second argument to the Date constructor to use a different timezone than the user is in.

The getDepartureSchedule is about fetching data from the MBTA API and serializing it into an array of objects. The tricky part was to understand the API and which resources I need to display the North station-like departure board. I found that I needed to fetch predictions and include schedules and routes. From the schedules and predictions, I compute the status of the train - whether it's on time or late, but also displaying important updates if any. I used routes to compute the destination of the train.

## Tests

schedule.test.js in api directory is for testing the getDepartureSchedule function. By mocking the fetch function and system date I can check if the function serializes the data correctly.

App.test.js is testing whether the data is updating every 10 seconds.

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

