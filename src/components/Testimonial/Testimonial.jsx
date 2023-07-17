import React from 'react'
import Slider from 'react-slick'
import av01 from '../../assets/images/ava-1.jpg'
import av02 from '../../assets/images/ava-2.jpg'
import av03 from '../../assets/images/ava-3.jpg'
import av04 from '../../assets/images/ava-4.png'

const Testimonial = () => {
    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:992,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                
                },
            },
        ]
    }
  return <Slider {...settings}>
    <div className="testimonial px-4 px-3">
        <p>Chau Pinan's tourism service is a dream come true! Impeccable organization, knowledgeable guides, and breathtaking destinations, they truly redefine the meaning of a perfect vacation.</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={av01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">James Brown</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial px-4 px-3">
        <p>Chau Pinan's tourism service is a traveler's best friend! From seamless bookings to unforgettable experiences, they know exactly how to create a trip tailored to your desires.</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={av02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">Emily Smith</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial px-4 px-3">
        <p>Chau Pinan's tourism service is a must for wanderlust souls! With their expertise and attention to detail, they take the stress out of travel and transform every trip into a remarkable adventure.</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={av03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">Thomas Wilson</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial px-4 px-3">
        <p>Chau Pinan's tourism service is a heaven for explorers! From start to finish, they provide a seamless experience, making every moment of your trip memorable and hassle-free.</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={av04} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">Olivia Johnson</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>
}

export default Testimonial