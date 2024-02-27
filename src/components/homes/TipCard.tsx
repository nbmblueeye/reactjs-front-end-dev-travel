import ToUpperCase from './ToUpperCase';

type Props = {
    image: string,
    date: string,
    category: string,
    service: string,
    title: string,
    price: string,
    unit: string
}

const TipCard = ({image,date,category,service,title,price,unit}:Props) => {
  return (
    <div className="travel__home-special-upcoming_card">
        <div className="card-image">
            <div className="card-image-box">
                <img src={image} alt="special-upcoming" />
            </div>
            <p className="card-image-text-muted">
                {date}
            </p>
        </div>
        <div className="card-info">
            <div className="card-info-meta">
                <p className={`card-info-meta-category ${category == "adventure" ? "active":""}`}>
                    <ToUpperCase text={category}/>
                </p>
                <p className="card-info-meta-text">
                    {service}
                </p>
            </div>
            <div className="card-info-title">
                <h1>{title}</h1>
            </div>
            <div className="card-info-end">
                <p className="card-info-end-price"><strong>{price}</strong>/{unit}</p>
                <button className="card-info-button">
                    Book Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default TipCard
