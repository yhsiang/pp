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