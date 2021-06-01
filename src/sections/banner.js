import BFeatured from "../components/Banner-Featured/BFeatured"
import Carrousel from "../components/Banner-Featured/Carrousel";
import CountDown from "../components/Banner-Featured/CountDown";
import Slide from 'react-reveal/Slide';
import { useState } from "react";


const Banner = () => {
  const [state, setState] = useState({
    deadline: 'June, 16, 2021',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  })

  const {deadline, days, hours, minutes, seconds} = state


  const getTimeUnit = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());

    if (time < 0) {
      console.log('Sorry, Event date has passed') 
    } 
    else {
      const seconds = Math.floor((time/1000)%60);
      const minutes = Math.floor((time/1000/60)%60);
      const hours = Math.floor((time/(1000*60*60))%24);
      const days = Math.floor(time/(1000*60*60*24));

      setState({
        ...state,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      })
    }
  }
  
  setInterval(() => {
    getTimeUnit(deadline)
  }, );



  return (
    <div className="">
      <div className="absolute w-full">
        <Carrousel/>
      </div>
    
      <div className="relative w-full top-56 md:top-60 lg:top-80">
        <BFeatured/>
      </div>
      
      <div className="w-full relative top-72 md:top-72 lg:top-96">
        <Slide left delay={1000}>
          <CountDown deadline = {deadline} days={days} hours={hours} minutes={minutes} seconds={seconds}/>
        </Slide>
        
      </div>
    </div>
  );
}

export default Banner