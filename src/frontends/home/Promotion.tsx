import { promotion } from '../../components/homes/images';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Promotion = () => {

  const alerRef = useRef(null);
  const lefRef = useRef(null);
  const rightRef = useRef(null);
 
  useEffect(() => {
      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: alerRef.current,
              start: 'top center',
          },
      });
      tl.to(lefRef.current, {
          x:0,
          opacity: 1,
          duration:1,
      });
      tl.to(rightRef.current, {
          x:0,
          opacity: 1,
          duration:2,
      });

  },[]);


  return (
    <div className="travel__home-promotion" id="alert" ref={alerRef}>
        <div className="container">
            <div className="travel__home-promotion_left" ref={lefRef}>
              <div className="travel__home-promotion_left-image-box">
                <img src={promotion} alt="promotion" />
                <div className="travel__home-promotion_left-image-box_article">
                  <h3 className="title">5000+</h3>
                  <p className="text">TOURISTS</p>
                </div>
                <div className="travel__home-promotion_left-image-box_article">
                  <h3 className="title">300+</h3>
                  <p className="text">DESTINATIONS</p>
                </div>
                <div className="travel__home-promotion_left-image-box_article">
                  <h3 className="title">150+</h3>
                  <p className="text">HOTELS</p>
                </div>
              
              </div>
            </div>
            <div className="travel__home-promotion_right" ref={rightRef}>
                <h1 className="title">
                  Travel Any Corner of The World With Us
                </h1>
                <p className="text">
                  Would you explore nature paradise in the world, let’s find the best destination in world with us, Would you explore nature paradise in the world, let’s find the best destination in world with us. 
                  <br/>
                  <br/>
                  Would you explore nature paradise in the world, let’s find the best destination in world with us.Would you explore nature paradise in the world, let’s find the best destination in world with us.
                </p>
                <button className="travel__home-promotion_button button">
                    Contact Us
                </button>
            </div>
        </div>
    </div>
  )
}

export default Promotion