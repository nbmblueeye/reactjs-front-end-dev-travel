import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

type Props = {
    comment: string,
    name: string,
    field: string,
    image:  string,
    rating: number
}

const CustomerResponseCard = ({comment, name, field, image, rating}:Props) => {
  return (
    <div className="travel__home-customer-response_card">
        <div className="travel__home-customer-response_card-icon">
            <RiDoubleQuotesL />
        </div>
        <div className="card-info">
            <p className="card-info_customer-comment text">
                {comment}
            </p>
            <Link to="#" className="card-info_customer-name">
                {name}
            </Link>
            <p className="card-info_customer-field text">
                {field}
            </p>
        </div>
        <div className="card-image">
            <div className="card-image-box">
                <img src={ image } alt="customer" />
            </div>
            <p className="card-image-rating">
                <FaStar />
                <span>{rating}</span>
            </p>
        </div>
    </div>
  )
}

export default CustomerResponseCard
