import '../home/Home.scss';
import 'swiper/css/bundle';
import Swiper from 'swiper/bundle';
import CustomerResponseCard from '../../components/homes/CustomerResponseCard';
import { customerDatas } from '../../frontends/home/data';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const CustomerResponse = () => {

    const customerSwiperRef = useRef(null);
    const swiperPaginationRef = useRef(null);
    const swiperNextRef = useRef(null);
    const swiperPrevRef = useRef(null);

    const customerRef = useRef(null);
    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: customerRef.current,
                start: 'top bottom',
            },
        });
        tl.to(customerRef.current, {
            y: 0,
            opacity: 1,
            duration:2,
        });

    },[]);

    useEffect( () => {
        const initSwiper = () => {
            if(customerSwiperRef.current){
                new Swiper(customerSwiperRef.current, {
                    pagination: {
                        el: swiperPaginationRef.current,
                        clickable: true,
                    },
                    navigation: {
                        nextEl: swiperNextRef?.current,
                        prevEl: swiperPrevRef?.current,
                    },
                    slidesPerView: 1,
                    spaceBetween: 20,
                    breakpoints: {
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                      },
                
                });
            }
        }

        initSwiper();

    },[customerSwiperRef.current])

    return (
        <div className="travel__home-customer-response" ref={customerRef}>
            <div className="container">
                <div className="swiper customerSwiper" ref={ customerSwiperRef }>
                    <div className="swiper-wrapper">
                        {
                            customerDatas.map((data, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <CustomerResponseCard comment={data.comment} name={data.name} field={data.field} image={data.image} rating={data.rating}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination" ref={swiperPaginationRef}></div> 
                    <div className="swiper-button-next travel__home_swiper-button next" ref={swiperNextRef}></div>
                    <div className="swiper-button-prev travel__home_swiper-button prev" ref={swiperPrevRef}></div>
                </div>
            </div>
        </div>
    )
}

export default CustomerResponse
