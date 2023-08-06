import React from 'react'
import './footer.css'

import { Container,Row,Col, ListGroup,ListGroupItem } from 'reactstrap'
import { Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png'



const Quick__links=[
  {
    path:'home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tour',
    display:'Tour'
  },
]
const Quick__link2=[
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


function footer() {
  const year=new Date().getFullYear()
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='3'>
          <div className='logo'>
            <img src={logo} alt=''/>
            <p>You can follow bellow on instagram </p>
          </div>
          <div className="social__links d-flex align-items-center gap-4">
            <span>
              <Link to='#'><i class='ri-github-fill'></i></Link>
            </span>
            <span>
              <Link to='#'><i class='ri-instagram-line'></i></Link>
            </span>
          </div>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'>Discover</h5>
          <ListGroup className='footer_quick-links'>
            {
              Quick__links.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'>Quick Links</h5>
          <ListGroup className='footer_quick-links'>
            {
              Quick__link2.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'>Contact</h5>
          <ListGroup className='footer_quick-links'>
           
                <ListGroupItem  className='ps-0 border-0 d-flex align-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class='ri-map-pin-line'></i></span>
                  Address:
                </h6>
                <p className='mb-0'>Rtc road, Hyderabad</p>
                </ListGroupItem>
                <ListGroupItem  className='ps-0 border-0 d-flex align-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class='ri-mail-line'></i></span>
                  Email:
                </h6>
                <p className='mb-0'>Taterao3133@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem  className='ps-0 border-0 d-flex align-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class='ri-phone-fill'></i></span>
                  Phone:
                </h6>
                <p className='mb-0'>+91 8788*799*6</p>
                </ListGroupItem>
            
            
            
          </ListGroup>
        </Col>
        <Col lg='12' className='text-center'>
          <p className="copyright">Copyright {year}, design and developed by Taterao.
          All rights reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default footer