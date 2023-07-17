import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-pinan.png'

const quick__links=[
  {
    path:'/home',
    display:'Home'

  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
]
const quick__links2=[
  {
    path:'/gallery',
    display:'Gallery'

  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
]
const footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Follow us : </p>
              <div className="social__links">
                <span>
                    <a href="https://www.facebook.com/profile.php?id=100025392139702"><i class="ri-facebook-circle-line"></i></a>                    
                </span>
                <span>
                  <a href="https://www.instagram.com/pinan0204/?fbclid=IwAR3oc4pnZmrz9eeRBIrnACff8RWoPmKdfHk2FvRsfZDSRG0TU4MzFk-v0K0"><i class="ri-instagram-line icon__instagram"></i></a>                    
                </span>
                <span>
                  <a href="https://github.com/Pinan11233"><i class="ri-github-fill icon__github"></i></a>                 
                </span>
                <span>
                  <a href="https://www.youtube.com/channel/UCAwaK7_reFXJB3WPDzRQK7Q"><i class="ri-youtube-line icon__youtube"></i></a>                    
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">
              Discover
            </h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item,index)=> (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">
              Quick Links
            </h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item,index)=> (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">
              Contact
            </h5>
            <ListGroup className='footer__quick-links'>

                  <ListGroupItem className='mb-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-map-pin-line"></i>
                      </span>
                      Address:
                    </h6>
                    <p className="mb-0">
                      Ho Chi Minh city
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className='mb-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-mail-line"></i>
                      </span>
                      Email:
                    </h6>
                    <p className="mb-0">
                      chaubinhan11233@gmail.com
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className='mb-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-phone-line"></i>
                      </span>
                      Phone:
                    </h6>
                    <p className="mb-0">
                      0834295763
                    </p>
                  </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12'>
            <p className="copyright text-center pt-5">
              Copyright {year}, by Muhibur Rahman, design and update by Chau Pinan. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default footer