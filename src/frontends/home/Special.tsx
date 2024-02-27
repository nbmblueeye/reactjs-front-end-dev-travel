import { Link } from 'react-router-dom';
import { tipDatas } from '../../frontends/home/data.tsx';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ToUpperCase from '../../components/homes/ToUpperCase.tsx';
import TipCard from '../../components/homes/TipCard.tsx';

gsap.registerPlugin(ScrollTrigger);

type Tip = {
    type: string,
    image: string,
    date: string,
    category: string,
    service: string,
    title: string,
    price: string,
    unit: string
}

const Special = () => {

    const tipRef = useRef(null);
    const titleRef = useRef(null);
    const navRef = useRef(null);
    const bodyRef = useRef(null);

    const [activeTab, setactiveTab] = useState("teams");
    const [types, setTypes] = useState([]);
    const [tips, setTips] = useState<Tip[]>([]);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: tipRef.current,
                start: 'top bottom',
            },
        });
        tl.to(titleRef.current, {
            y:0,
            opacity: 1,
        });

        tl.to(navRef.current, {
            y:0,
            opacity: 1,
            duration:1,
        });

        tl.to(bodyRef.current, {
            y:0,
            opacity: 1,
            duration:2,
        });

        const initData = () => {
            let cates:any = [];
            tipDatas.map((data:any) => {
                if(!cates.includes(data.type)){
                    cates.push(data.type);
                }
            });
            setTypes(cates);
        };
        initData();

    },[]);

    useEffect(() => {
        let results = tipDatas.filter(data => data.type === activeTab);
        if(results.length > 0) {
            setTips(results);     
        }
    },[activeTab])


  return (
    <div className="travel__home-special-upcoming" id="tip" ref={tipRef}>
        <div className="container">
            <div className="travel__home-special-upcoming_title" ref={titleRef}>
                <h1 className="title">Special Upcoming Offers</h1>
            </div>
            <div className="travel__home-special-upcoming_nav" ref={navRef}>
                <ul className="travel__home-special-upcoming_nav-list">
                    {
                        types.length > 0 && types.map((type:string, index:number) => {
                            return(
                                <li className="travel__home-special-upcoming_nav-list_item" key={index}>
                                    <Link to="#" className={`${activeTab === type ? "active":""}`} onClick={() => setactiveTab(type)}>
                                        {<ToUpperCase text={type}/>}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="travel__home-special-upcoming_body" ref={bodyRef}>
                {
                 tips.length > 0 && tips.map((tip:Tip, index:number) => {
                    return(
                        <TipCard image={tip.image} date={tip.date} category={tip.category} service={tip.service} title={tip.title} price={tip.price} unit={tip.unit} key={index}/>
                    )
                 })
                }       
            </div>
        </div>
    </div>
  )
}

export default Special
