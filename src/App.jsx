import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './Components/Background/background';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Hero/hero';
import Login from './Components/Login/Login';
import Signup from './Components/Sign-up/sign-up';
import Bookings from './Components/Bookings/bookings';
import Discover from './Components/Discover/discover';
import Home from './Components/Home/home';

function App() {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give into the", text2: "full experience" }
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=> {
      setHeroCount((count)=>{return count===2? 0:count+1})
    }, 6000);
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/home' element={DiscoverPage ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) } />
          <Route exact path='/discover' element={<Discover />} />
          <Route exact path='/bookings' element={<Bookings />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

function DiscoverPage({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) {
  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
       <Home/>
    </>
  );
}


export default App;
