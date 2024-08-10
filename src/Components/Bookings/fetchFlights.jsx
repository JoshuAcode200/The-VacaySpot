import axios from 'axios';

const fetchFlights = async () => {
  const options = {
    method: 'GET',
    url: 'https://sky-scanner3.p.rapidapi.com/get-config',
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
      'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchFlights;
