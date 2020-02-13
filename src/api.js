import axios from 'axios';

const BASE_URL = 'https://api.bitprice.cheap/price';

export const getPrice = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};
