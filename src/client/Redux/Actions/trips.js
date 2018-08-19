import axios from 'axios';
import { FETCH_SEARCH_TRIPS, FETCH_SEARCH_FAILED } from './constants';

const apiUrl = '/api/trips/';

export const SearchTripsSuccess = trips => ({
  type: FETCH_SEARCH_TRIPS,
  trips,
});

export const SearchTripsFailed = error => ({
  type: FETCH_SEARCH_FAILED,
  error,
});

export const searchTrips = formData => dispatch => axios({
  method: 'get',
  url: `${apiUrl}search?${formData}`,
  withCredentials: true,
  responseType: 'json',
})
  .then((trips) => {
    dispatch(SearchTripsSuccess(trips.data));
  })
  .catch((error) => {
    dispatch(SearchTripsFailed(error));
  });


export const fetchAllTrips = () => dispatch => axios({
  method: 'get',
  url: apiUrl,
  withCredentials: true,
  responseType: 'json',
})
  .then((trips) => {
    dispatch(SearchTripsSuccess(trips.data));
  })
  .catch((error) => {
    throw (error);
  });
