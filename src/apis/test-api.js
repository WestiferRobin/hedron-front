import axios from 'axios';

const TEST_URL = 'http://localhost:8080/players/1'; // Replace with your API's base URL

// Simulate fetching the opponent's name from the API
export const fetchTest = async () => {
  try {
    const response = await axios.get(TEST_URL);
    console.log(response);
    return response.data; // Assuming the response contains the opponent's name
  } catch (error) {
    console.log(error);
    throw error;
  }
};
