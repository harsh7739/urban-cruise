import { useState,useEffect } from "react"
import BookTempo from "./BookTempo"
import CovidSafty from "./CovidSafty"
import Faq from "./Faq"
import Footer from "./Footer"
import HireTempo from "./HireTempo"
import OtherVehicles from "./OtherVehicles"
import PlacesToVisit from "./PlacesToVisit"
import RentTempo from "./RentTempo"
import Testimonial from "./Testimonial"
import TravelBudget from "./TravelBudget"
import WhyUrban from "./WhyUrban"
import FloatingContactIcons from "./FloatingContactIcon"
import SocialMediaIcons from "./SocialMediaIcons"

function HomePage(){
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    return(
        <>

<div
  className="bg-image text-center text-white d-flex align-items-center justify-content-center"
  style={{
    backgroundImage: `url(${"https://thumbs.dreamstime.com/b/luxury-coach-bus-driving-highway-sunset-modern-travels-down-beautiful-background-symbolizing-travel-322919814.jpg"})`,
    height: '75vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="d-flex">
   <div style={{marginLeft:"8px",textJustify:"auto"}}>
    <h1 className="fst-italic" style={{color:"yellow"}}>TEMPO TRAVLER RENTAL IN DELHI</h1>
    <h3>HIRE TEMPO TRAVELERS ON RENT </h3>
    <h3>EXPERIENCE OUR PREMIUM, ROYAL ROYAL VIP CLASS TEMPO TRAVELLERS FOR A MEMORABLE RIDE IN DELHI, NOIDA, GURUGRAM</h3>
   </div>
  <div className="w-50 m-auto ml-5"></div>

  </div>
</div>
{show && (
      <button
        className="btn btn-warning rounded-circle shadow position-fixed bottom-0 end-0 m-4"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{ zIndex: 1050, width: '45px', height: '45px' }}
      >
        <i class="fa-solid fa-upload"></i>
      </button>
    )
}
<HireTempo />
<BookTempo />
<TravelBudget />
<RentTempo />
<OtherVehicles />
<WhyUrban />
<Testimonial />
<PlacesToVisit />
<Faq />
<CovidSafty />
<Footer />
<FloatingContactIcons />
<SocialMediaIcons />
        </>
    )
}
export default HomePage