import React from 'react'

//Imported Images
import video from '../../Assets/CityLandscape.mp4'
import MagicCarpet from '../../Assets/MagicCarpet.png'



const Home = () => {
  return (
    <div className='home flex container'>
        <div className="mainText">
            <h1>Come with us! Let us show you a whole new world...</h1>
        </div> 
        <div className="homeImages flex">
          <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
          </div>
          <img src={MagicCarpet} className="carpet" alt="Image" />
          
        </div>
    </div>
  )
}

export default Home