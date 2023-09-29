import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Replace with your API's base URL

// Simulate fetching the opponent's name from the API
export const fetchTest = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/test`);//(`${BASE_URL}/test`);
    console.log(response);
    return response.data; // Assuming the response contains the opponent's name
  } catch (error) {
    console.log(error);
    throw error;
  }
};
