import React from 'react';
import './home.css';
import Carousel from '../CarouselComponent/carousel';
import italy1 from '../../assets/forum-romanum-italy.jpg';
import china1 from '../../assets/great-wall-china-1.jpg';
import greece1 from '../../assets/greece-hotel.jpg';
import greece2 from '../../assets/greece-2.jpg';
import greece3 from '../../assets/greece-vacay.jpg';
import greece4 from '../../assets/greece-pic.jpg';
import india1 from '../../assets/india-1.jpg';
import japan1 from '../../assets/kyoto-japan-1.jpg';
import japan2 from '../../assets/kyoto-japan-kiyomizu-temple-asia.jpg';
import japan3 from '../../assets/mount-fuji-japan.jpg';
import nadu1 from '../../assets/Nadu-1.jpg';
import moscow1 from '../../assets/moscow-1.jpg';
import paris1 from '../../assets/paris-1.jpg';
import tahiti1 from '../../assets/tahiti-1.jpg';

const Home = ({heroData, heroCount, setHeroCount, playStatus, setPlayStatus}) => {

  const slides = [
    {
      image: italy1,
      content: <h2>ITALY</h2>,
    },
    {
      image: china1,
      content: <h2>CHINA</h2>,
    },
    {
      image: greece1,
      content: <h2>GREECE</h2>,
    },
    {
      image: greece2,
      content: <h2>GREECE</h2>,
    },
    {
      image: greece3,
      content: <h2>GREECE</h2>,
    },
    {
      image: greece4,
      content: <h2>GREECE</h2>,
    },
    {
      image: india1,
      content: <h2>INDIA</h2>,
    },
    {
      image: japan1,
      content: <h2>JAPAN</h2>,
    },
    {
      image: japan2,
      content: <h2>JAPAN</h2>,
    },
    {
      image: japan3,
      content: <h2>JAPAN</h2>,
    },
    {
      image: nadu1,
      content: <h2>GREECE</h2>,
    },
    {
      image: moscow1,
      content: <h2>MOSCOW</h2>,
    },
    {
      image: paris1,
      content: <h2>PARIS</h2>,
    },
    {
      image: tahiti1,
      content: <h2>TAHITI</h2>,
    },
  ];

  return(
    <section className="home">
      <div className='wrapper1'>
        <div className="secContainer container">
          <div className="homeText">
            <h1 className="title">
              Plan your trip now with The VacaySpot
            </h1>
            <p className="subtitle">
              Travel to your dream spots,
              Go on a romantic getaway
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
            <Carousel slides={slides} />
        </div>
      </div>
      <div className='wrapper2'>
        <button onClick='/bookings' className="btn">
          Book Now!
        </button>
      </div>
    </section>
  );
}

export default Home;