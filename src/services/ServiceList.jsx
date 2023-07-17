import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'
import weatherImg   from '../assets/images/weather.png'
import guideImg   from '../assets/images/guide.png'
import customizationImg   from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl:weatherImg,
        title: "Calculate Weather",
        desc: "Discover accurate and up-to-date weather forecasts with our innovative Calculate Weather service, ensuring you have the perfect travel experience."
    },
    {
        imgUrl:guideImg,
        title: "Best Tour Guide",
        desc: "Enhance your travel experience with our top-notch Best Tour Guide service, offering expert guides who will make your trip unforgettable."
    },
    {
        imgUrl:customizationImg,
        title: "Customization",
        desc: "Create your dream vacation with our Customization service, offering personalized travel options to suit your individual needs and desires."
    },
]
const ServiceList = () => {
  return (
    <>
    {servicesData.map((item,index)=>(
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))}
    </>
  )
}

export default ServiceList