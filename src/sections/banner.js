import BFeatured from "../components/Banner-Featured/BFeatured"
import Carrousel from "../components/Banner-Featured/Carrousel";
import CountDown from "../components/Banner-Featured/CountDown";
import Slide from 'react-reveal/Slide';


const Banner = () => {
  return (
    <div className="">
      <div className="absolute w-full">
        <Carrousel/>
      </div>
    
      <div className="relative w-full top-80">
        <BFeatured/>
      </div>
      
      <div className="w-full relative top-96">
        <Slide left>
          <CountDown/>
        </Slide>
        
      </div>
    </div>
  );
}
{/* <div className="relative w-full"></div> */}
export default Banner