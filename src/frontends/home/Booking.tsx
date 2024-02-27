import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaHotel } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Booking =  () => {

    const reviewRef = useRef(null);
    useEffect(() => {
        gsap.to(reviewRef.current, {
            y: -170,
            opacity: 1,
            duration:1,
            scrollTrigger: {
              trigger: reviewRef.current,
              start: 'top bottom',
            },
        });
    },[]);

  return (
    <div className="travel__home-booking" id="review" ref={reviewRef}>
        <div className="container">
            <div className="travel__home-booking_nav">
                <ul className="travel__home-booking_nav-list">
                    <li className="travel__home-booking_nav-list_item">
                        <Link to="#" className="active">
                             <BiSolidPlaneAlt size={25}/>
                             Flight
                        </Link>
                    </li>
                    <li className="travel__home-booking_nav-list_item">
                        <Link to="#">
                            <FaHotel size={16}/>
                            Hotel
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="travel__home-booking_info">
                <div className="travel__home-booking_info-item where">
                    <div className="travel__home-booking_info-item-detail">
                        <p className="text-muted">Living From</p>
                        <h3 className="title">Dubai</h3>
                    </div>
                    <div className="travel__home-booking_info-item-type">
                        <IoIosAirplane size={24}/>
                    </div>
                    <div className="travel__home-booking_info-item-detail">
                        <p className="text-muted">Going to</p>
                        <h3 className="title">New York</h3>
                    </div>
                </div>
                <div className="travel__home-booking_info-item flight">
                    <div className="travel__home-booking_info-item-detail leave">
                        <p className="text-muted">
                            Leave 
                            <IoIosAirplane/>
                        </p>
                        <h3 className="title">23 Jan, Sat</h3>
                    </div>
                    <div className="travel__home-booking_info-item-type">
                        <FaHotel size={24}/>
                    </div>
                    <div className="travel__home-booking_info-item-detail return">
                        <p className="text-muted">
                            Return
                            <IoIosAirplane/>
                        </p>
                        <h3 className="title">23 Jan, Sat</h3>
                    </div>
                </div>
                <div className="travel__home-booking_info-item search">
                    <FaSearch size={32}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Booking
