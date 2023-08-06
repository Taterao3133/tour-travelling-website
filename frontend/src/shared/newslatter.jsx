import React from 'react'
import './newslatter.css'
import { Col, Container, Row } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'


const newslatter = () => {
  return <section className='newslatter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newslatter__content'>
                    <h2>Subscribe now to get usefull traveling information</h2>
                    <div className="newslatter__input">
                        <input type='email' placeholder='enter your email' className='search'/>
                        <button className='btn newslatter__btn'>Subscribe</button>
                    </div>
                </div>
            </Col>
            <Col lg='6'>
               <div className="newslatter__img">
                <img src={maleTourist}alt=''/>
               </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default newslatter