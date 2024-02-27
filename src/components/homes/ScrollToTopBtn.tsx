import { IoChevronUpOutline } from "react-icons/io5";
import { useEffect, useState } from 'react'

const ScrollToTopBtn = () => {

  const [scrollToTopBtn, setScrollToTopBtn ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>{
      if( window.scrollY > 300 ){
        setScrollToTopBtn(true);

      }else{
        setScrollToTopBtn(false);
      }
    });
  },[]);

  const scrollToTop = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(scrollToTopBtn){
      window.scrollTo(
        {
          top: 0,
          behavior: "smooth",
        }
      );
    }
  }

  return (
    <>
      <button className={`travel__backtotop-btn ${scrollToTopBtn ? "show":"hide"}`} onClick={(e) => scrollToTop(e)}>
        <IoChevronUpOutline />
      </button>
    </>
  )
}

export default ScrollToTopBtn