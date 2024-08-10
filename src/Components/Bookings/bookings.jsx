import React, { useState, useEffect } from 'react';
import fetchFlights from './fetchFlights'; 

const Bookings = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const getFlights = async () => {
      try {
        const data = await fetchFlights();       
        if (data) {
          setFlights(data.Quotes || []); 
        }
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
