import { getDepartureSchedule } from './schedule'
import mockResponse from './schedule.mock'

test ('predictions are serialized correctly', async () => {
  jest
    .useFakeTimers('modern')
    .setSystemTime(new Date('Sat, 05 Jun 2021 18:19:40 GMT').getTime());

  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse)
    })
  );

  const actual = await getDepartureSchedule('test');
  const expected = [
    {
      "id": "prediction-ADDED-1580773558-70027-130",
      "trainId": "O-546ABA12",
      "time": "02:24 PM",
      "status": "On time",
      "line": "Orange Line",
      "destination": "Oak Grove"
    },
    {
      "id": "prediction-47421797-BrooklineHillsClosedKenmoreRiversideKenmoreWashingtonStreet-70206-20",
      "trainId": "G-10084",
      "time": "02:25 PM",
      "status": "On time",
      "line": "Green Line E",
      "destination": "Heath Street"
    },
    {
      "id": "prediction-ADDED-1580773576-70206-20",
      "trainId": "G-10061",
      "time": "02:25 PM",
      "status": "On time",
      "line": "Green Line C",
      "destination": "Cleveland Circle"
    },
    {
      "id": "prediction-47256274-70026-60",
      "trainId": "O-546ABB1D",
      "time": "02:26 PM",
      "status": "1 min late",
      "line": "Orange Line",
      "destination": "Forest Hills"
    },
    {
      "id": "prediction-47256359-70027-130",
      "trainId": "O-546ABA30",
      "time": "02:30 PM",
      "status": "11 min late",
      "line": "Orange Line",
      "destination": "Oak Grove"
    },
    {
      "id": "prediction-47421093-BrooklineHillsClosedKenmoreRiversideKenmoreWashingtonStreet-70206-20",
      "trainId": "G-10052",
      "time": "02:33 PM",
      "status": "6 min late",
      "line": "Green Line C",
      "destination": "Cleveland Circle"
    },
    {
      "id": "prediction-47421798-BrooklineHillsClosedKenmoreRiversideKenmoreWashingtonStreet-70206-20",
      "trainId": "G-10091",
      "time": "02:35 PM",
      "status": "On time",
      "line": "Green Line E",
      "destination": "Heath Street"
    },
    {
      "id": "prediction-47256275-70026-60",
      "trainId": "O-546ABA18",
      "time": "02:38 PM",
      "status": "2 min late",
      "line": "Orange Line",
      "destination": "Forest Hills"
    },
    {
      "id": "prediction-47256360-70027-130",
      "trainId": "O-546ABA2F",
      "time": "02:42 PM",
      "status": "4 min late",
      "line": "Orange Line",
      "destination": "Oak Grove"
    },
    {
      "id": "prediction-ADDED-1580773594-70206-20",
      "trainId": "G-10063",
      "time": "02:42 PM",
      "status": "On time",
      "line": "Green Line C",
      "destination": "Cleveland Circle"
    }
  ]

  expect(actual).toStrictEqual(expected);

  global.fetch.mockRestore();
});
