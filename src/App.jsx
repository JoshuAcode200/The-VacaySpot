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
import Popular from './Components/Popular/popular';
import Testimonials from './Components/Testimonials/testimonials';
import Footer from './Components/Footer/footer';


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
    }, 8000);
  }, [])

 
  return (
    <Router>
      <div className="App">
        <Background heroCount={heroCount} playStatus={playStatus}/>
        <Navbar />
        <Routes>
          <Route exact path='/' element={LandingPage ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) } />
          <Route exact path='/home' element={HomePage ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) } />
          <Route exact path='/discover' element={<Discover />} />
          <Route exact path='/fetchFlights' element={<Bookings />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

function LandingPage({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) {
  return (
    <>
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </>
  );
}

function HomePage({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus}) {
  return (
    <>
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
      <Home/>
      <Footer/>
      <Popular/>
      <Testimonials/>
      
      
    </>
  );
}


export default App;
