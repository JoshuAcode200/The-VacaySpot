import React, { useState, useEffect } from 'react';
import fetchFlights from './fetchFlights'; // Adjust the path as necessary

const Bookings = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const getFlights = async () => {
      try {
        const data = await fetchFlights('SFO-sky', 'LAX-sky', '2024-09-01'); // Replace with your desired parameters
        setFlights(data.Quotes || []); // Customize based on the API response structure
      } catch (error) {
        console.error("Error fetching flights", error);
      }
    };

    getFlights();
  }, []);

  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            {flight.MinPrice} USD - {flight.Direct ? 'Direct' : 'Indirect'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;
