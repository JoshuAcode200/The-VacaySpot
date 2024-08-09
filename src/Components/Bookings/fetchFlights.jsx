import axios from 'axios';

const fetchFlights = async (origin, destination, departureDate) => {
  const options = {
    method: 'GET',
    url: 'rapidapi.com',
    params: {
      originPlace: origin,
      destinationPlace: destination,
      outboundDate: departureDate,
      adults: '1', // Customize as needed
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data", error);
    throw error;
  }
};

export default fetchFlights;
