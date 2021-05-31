import BFeatured from "../components/Banner-Featured/BFeatured"
import Carrousel from "../components/Banner-Featured/Carrousel";


const Banner = () => {
  return (
    <div className="">
      <div className="absolute w-full">
        <Carrousel/>
      </div>
    
      <div className="relative w-full top-80">
        <BFeatured/>
      </div>
      
    </div>
  );
}
{/* <div className="relative w-full"></div> */}
export default Banner