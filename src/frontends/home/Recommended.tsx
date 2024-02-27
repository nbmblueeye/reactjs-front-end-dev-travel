import { Link } from 'react-router-dom';
import {datas} from '../../frontends/home/data.tsx';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ToUpperCase from '../../components/homes/ToUpperCase.tsx';
import BlogCard from '../../components/homes/BlogCard.tsx';

gsap.registerPlugin(ScrollTrigger);

type Blog = {
    category: string,
    title: string,
    text: string,
    image: string,
    rating: number
}

const Recommended = () => {

    const blogRef = useRef(null);
    const titleRef = useRef(null);
    const navRef = useRef(null);
    const bodyRef = useRef(null);

    const [activeTab, setActiveTab] = useState("populor");
    const [categories, setCategories] = useState([]);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: blogRef.current,
                start: 'top bottom',
            },
        });

        tl.to(titleRef.current, {
            y: 0,
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
            datas.map((data:any) => {
                if(!cates.includes(data.category)){
                    cates.push(data.category);
                }
            });
            setCategories(cates);

        };
        initData();
    },[]);

    useEffect(() => {
        let results = datas.filter(data => data.category === activeTab);
        if(results.length > 0) {
            setBlogs(results);     
        }
    },[activeTab]);


  return (
    <div className="travel__home-recommended" id="blog" ref={blogRef}>
        <div className="container">
            <div className="travel__home-recommended_title" ref={titleRef}>
                <h1 className="title">Recommended Destination</h1>
            </div>
            <div className="travel__home-recommended_nav" ref={navRef}>
                <ul className="travel__home-recommended_nav-list">
                    {
                        categories.length > 0 && categories.map((cate:string, index:number) => {
                            return(
                                <li className="travel__home-recommended_nav-list_item" key={index}>
                                    <Link to="#" className={`${cate == activeTab ? "active":""}`} onClick={() => setActiveTab(cate)}>
                                       <ToUpperCase text={cate}/>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="travel__home-recommended_body" ref={bodyRef}>
               {
                    blogs.length > 0 && blogs.map((blog:Blog, index:number) => {
                        return (
                            <BlogCard key={index} title={blog.title} text={blog.text} image={blog.image} rating={blog.rating} />
                        )
                    })
               }
            </div>
        </div>
    </div>
  )
}

export default Recommended
