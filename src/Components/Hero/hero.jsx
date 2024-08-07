import './hero.css';
import arrowbtn2 from '../../assets/arrowbtn2.png'
import pauseicon1 from '../../assets/pauseicon1.png'
import playicon1 from '../../assets/playicon1.png'

const Hero = ({heroData, heroCount, setHeroCount, playStatus, setPlayStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">        
        <p>Explore destinations</p>
        <img src={arrowbtn2} alt=''/>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot -orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
      
        <div className="hero-play">
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pauseicon1:playicon1} alt=''/>
          <p>See video</p>
        </div>
      </div>
    </div>
  );
}
 
export default Hero;