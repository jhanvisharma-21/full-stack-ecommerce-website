import HomeSlider from "../components/HomeSlider";
import PopularProduct from "../components/PopularProduct";
export default function Home() {
  
  return (
    <>
      <div className="sliderWrapper">
        <HomeSlider />
        
        <PopularProduct/>

      </div>
    </>
  );
}