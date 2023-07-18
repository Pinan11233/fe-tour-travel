import React from 'react'
import { Card, CardBody } from 'reactstrap'
import {Link} from 'react-router-dom'
import './tour-card.css'
import calculateAvgRating from '../utils/avgRating'

const TourCrad = ({ tour }) => {
    const {_id, title, city, photo, price, featured, reviews} = tour

    const { totalRating, avgRating} = calculateAvgRating(reviews)
    
    return (
    <div className="tour__card">
        <Link to={`/tours/${_id}`} className='link__tour_click'>
        <Card>
            <div className="tour__img">
                <img src={photo} alt="tour-img" />
                {featured && <span>Featured</span>}
            </div>

         <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span id='tour_location' className="tour__location d-flex align-items-center gap-1">
                <i class="icon__location ri-map-pin-line"></i>{city}
                </span>
                <span className="tour__rating d-flex align-items-center gap-1">
                <i class="icon__rating ri-star-s-fill"></i> 
                {avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? (
                    "Not rated"
                ):(
                    <span>({reviews?.length})</span>                   
                )}
                </span>
            </div>

            <h5 className="tour__title">
                <Link to={`/tours/${_id}`}>{title}</Link>
            </h5>

            <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                <h5>
                    ${price} <span>/per person</span>
                </h5>
                <button className="btn booking__btn">
                    <Link to={`/tours/${_id}`}>Book Now</Link>
                </button>
            </div>

         </CardBody>
        </Card>
        </Link>
    </div>
  )
}

export default TourCrad