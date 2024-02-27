import { footer } from '../../components/homes/images';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  let rawTitle = "Don’t Miss The 50% Discount if <br/> You register Today";
  let rawButtonText = "Register Today";

  const homeFooterRef = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: homeFooterRef.current,
            start: 'top bottom',
        },
    });
    tl.to(homeFooterRef.current, {
        y: 0,
        opacity: 1,
        duration:2,
    });
  },[]);

  return (
   
    <div className="travel__home-footer" ref={homeFooterRef}>
      <div className="container">
        <div className="travel__home-footer-image">
          <img src={ footer } alt="footer-img" />
        </div>
        <div className="travel__home-footer-info">
          <h1 className="travel__home-footer-title title gradient__text-color" dangerouslySetInnerHTML={{ __html: rawTitle }}></h1>
          <Link to="/register" className="travel__home-footer-button">
            <p className='text' dangerouslySetInnerHTML={{ __html: rawButtonText }}></p>
          </Link>
        </div>
      </div>
    </div>
    
  )
}

export default Footer