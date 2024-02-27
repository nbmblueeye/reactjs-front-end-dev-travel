import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

type Props = {
    title: string,
    text: string,
    image: string,
    rating: number,
}

const BlogCard = ({title,text,image,rating}:Props) => {
  return (
    <div className="travel__home-recommended_card">
        <div className="card-image">
            <div className="card-image-box">
                <img src={image} alt="recommended" />
            </div>
            <p className="card-image-rating">
                <FaStar />
                <span>{rating}</span>
            </p>
        </div>
        <div className="card-info">
            <div className="card-info-title">
                <h3>{title}</h3>
            </div>
            <div className="card-info-destination">
                <FaLocationDot />    
                <p className="text">{text}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogCard
