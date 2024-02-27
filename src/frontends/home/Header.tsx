import headerImg from '../../assets/pexels-francesco-ungaro.png';

let rawH1 = "Discover Your Life, Travel <br/> Where You Want";
let rawP1 = "Would you explore natur paradise in the world, let’s find the best <br/> destination in world with us.";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {

  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
          trigger: headerRef.current,
          start: 'top center',
      },
    });
    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration:1
    });

    tl.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration:1.5,
    });
  },[]);

  return (
    <div className="travel__home-header-wrapper" ref={headerRef}>
      <div className="travel__home-header">
        <div className="travel__home-header-image">
          <img src={headerImg} alt="header-img" />
        </div>
        <div className="travel__home-header-info">
          <h1 className="travel__home-header-info-title title gradient__text-color" dangerouslySetInnerHTML={{ __html:  rawH1}} ref={titleRef}></h1>
          <p className="travel__home-header-info-text text gradient__text-color" dangerouslySetInnerHTML={{ __html: rawP1 }} ref={textRef}>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header