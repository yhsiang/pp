import axios from 'axios';

const BASE_URL = 'https://agile-reef-44387.herokuapp.com';

export const getBitoEXPrice = async () => {
  const response = await axios.get(`${BASE_URL}/bitoex`);
  return response.data;
};

export const getMaiCoinPrice = async (coin = 'btc') => {
  const response = await axios.get(`${BASE_URL}/maicoin/${coin}`);
  return response.data;
};

export const getBitoEXHistory = async (coin = 'btc') => {
  const response = await axios.get(`${BASE_URL}/history/bitoex/${coin}`);
  return response.data.map(d => ([d.date, d.price]));
};

export const getMaiCoinHistory = async (coin = 'btc') => {
  const response = await axios.get(`${BASE_URL}/history/maicoin/${coin}`);
  return response.data.map(d => ([new Date(d.x).getTime(), Number(d.y)]));
};