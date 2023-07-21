import React, {useRef, useEffect, useState, useContext} from 'react'
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup} from 'reactstrap'
import  {useParams} from 'react-router-dom'
import calculateAvgRating from './../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import NewSletter from '../shared/Newsletter'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'

import { AuthContext } from '../context/AuthContext'

const TourDetails = () => {

  const {id} = useParams()
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)
  const { user } = useContext(AuthContext)

  //fetch data from database
  const {data:tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`)

  //destructure from database
  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour;
  
  const {totalRating, avgRating} = calculateAvgRating(reviews)

  //format date
  const options = {day:'numeric', month:'long', year:'numeric'}
  
  // submit request to the server
  const submitHandler = async e =>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;

    

    try {

      if(!user || user === undefined || user === null){
        alert('Please sign in')
      }

      const reviewObj = {
        username:user?.username,
        reviewText,
        rating:tourRating,
      }

      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method:'post',
        headers: {
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
      })

      const result = await res.json()
      if(!res.ok) {
        return alert(result.message);
      }
      alert(result.message);

    } catch (err) {
      alert(err.message);
    }
    
    // alert(`${reviewText}, ${tourRating}`)
  }
  useEffect(() =>{
    window.scrollTo(0,0)
  },[tour])

  return <>
  <section>
    <Container>
      <Row>
        {loading && <h4 className='text-center pt-5'>Loading....</h4>}
        {error && <h4 className='text-center pt-5'>{error}</h4>}

        {!loading && !error && <Col lg='8'>
          <div className="tour__content">
            <img src={photo} alt="" />
            <div className="tour__info">
              <h2>{title}</h2>
              <div className="d-flex align-items-center gap-5">
              <span className="tour__rating d-flex align-items-center gap-1">
                <i class="ri-star-line" style={{'color':"var(--secondary-color)"}}></i> {avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? (
                    "Not rated"
                ):(
                    <span>({reviews?.length})</span>                   
                )}
                </span>
                <span>
                <i class="ri-map-pin-fill"></i> {address}
                </span>
              </div>
              <div className="tour__extra-details">
                <span><i class="ri-building-line"></i>{city}</span>
                <span><i class="ri-money-dollar-circle-line"></i>${price}/per person</span>
                <span><i class="ri-map-pin-time-line"></i>{distance}km</span>
                <span><i class="ri-group-line"></i>{maxGroupSize} people</span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>
            <div className="tour__reviews mt-4">
              <h4>Reviews ({reviews?.length} reviews)</h4>
              <Form onSubmit={submitHandler}>
                <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                  <span onClick={()=> setTourRating(1)}><i class="icon_rating ri-star-fill"></i></span>
                  <span onClick={()=> setTourRating(2)}><i class="icon_rating ri-star-fill"></i></span>
                  <span onClick={()=> setTourRating(3)}><i class="icon_rating ri-star-fill"></i></span>
                  <span onClick={()=> setTourRating(4)}><i class="icon_rating ri-star-fill"></i></span>
                  <span onClick={()=> setTourRating(5)}><i class="icon_rating ri-star-fill"></i></span>                  
                </div>
                <div className="review__input">
                  <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' required />
                  
                  <button className="primary__btn btn text-white" type='submit'>
                    Submit
                  </button>
                </div>
              </Form>
              <ListGroup className='user__reviews'>
                {
                  reviews?.map(review => (
                    <div className="review__item">
                      <img src={avatar} alt="" />
                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>{review.username}</h5>
                            <p>
                              {new Date(review.createdAt).toLocaleDateString("en-US", options)}
                            </p>
                          </div>
                          <span className="d-flex align-items-center">
                            {review.rating}<i class="ri-star-fill"></i>
                          </span>
                        </div>
                        <h6>{review.reviewText}</h6>
                      </div>
                    </div>
                  ))
                }
              </ListGroup>
            </div>
          </div>
        </Col>}
        <Col lg='4'>
          <Booking tour={tour} avgRating={avgRating}/>
        </Col>
      </Row>
    </Container>
  </section>
  <NewSletter/>
  </>
}

export default TourDetails