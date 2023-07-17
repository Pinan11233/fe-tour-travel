import React, {useEffect} from 'react'
import '../styles/about.css'
import { Container, Row, Col } from 'reactstrap'
import CommonSectionAbout from '../shared/CommonSectionAbout'
import NewSletter from '../shared/Newsletter'
const About = () => {
    useEffect(() =>{
        window.scroll(0,0)
      },[])
  return (
  <>
    <CommonSectionAbout title={"About Tour"}/>
    <section>
        <Container>
            <Row>
                <Col lg='12' className='text-center'>
                    <div className="about__text">
                        <span>
                        <br />Chau Pinan Travel Booking Website is proud to offer customers an exceptional experience and high-quality services. We are dedicated to ensuring customer satisfaction and creating unforgettable memories.
                        </span>
                    </div>    
                    <div className="about__text">
                        <span>
                            
                            <br />Quality is our top priority. With an experienced team of travel experts who have in-depth knowledge of the industry, we guarantee well-designed itineraries that prioritize safety and meet all customer needs. Our aim is to provide not just a visit to a destination, but a deep exploration of culture, famous landmarks, and unique cuisine.
                        </span>
                    </div>
                    <div className="about__text">    
                        <span>
                            <br />Furthermore, our services are attentive and meticulous. Chau Pinan is committed to fulfilling every customer requirement and desire. We leverage advanced technology to streamline the booking and payment process, ensuring convenience, speed, and security. You will experience professionalism from our support staff, who are ready to address any inquiries and accompany you throughout your travel journey.
                        </span>
                    </div>
                    <div className="about__text">    
                    
                        <span>
                            <br />Let Chau Pinan be your trusted companion for every trip and create unforgettable memories. From quality to service to experience, we promise customer satisfaction and joy that will be cherished forever.
                        </span>
                    </div>
                </Col>
            </Row>
        </Container>
       <NewSletter/>
    </section>
    </>
    )
}

export default About