import axios from 'axios';

export const createData = async (data) => {
  try {
    const response = await axios.post('http://localhost:5000/api/v1/news', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
