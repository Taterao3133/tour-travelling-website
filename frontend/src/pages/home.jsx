import React from 'react'
import '../styles/home.css'
import experience from '../assets/images/experience.png'

import {Container, Row,Col} from 'reactstrap';
import HeroImg from '../assets/images/hero-img01.jpg';
import HeroImg2 from '../assets/images/hero-img02.jpg';
import Herovideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';

import Searchbar from '../shared/searchbar';
import Services from '../services/services';
// import Featuredtourlist from '../components/featuredtourlist/featuredtourlist';
import MasonryImages from '../components/gallery-images/masonImages';
import Newslatter from '../shared/newslatter';
import TourData from '../assets/data/tours'
 import Subtitle from '../shared/subtitle';
import Tourcard from '../shared/TourCard'


const Home=()=> {
  return <>
    
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='hero__content'>
              <div className='hero__img d-flex align-items-center'>
                <Subtitle Subtitle={'Know'}/> 
                <h5> Better Before You Go</h5>
              <img src={worldImg} alt=''/>
              </div>
            <h1>Traveling opens the door to creating {''} <span>Memories</span></h1>
            <p> “Achieve peace of mind. Most of us live in the city. ...
Enhance your creativity. One of the biggest benefits of Travelling is that it takes you out of your comfort zone. ..<br></br>
              ” “It was a bright and sunny morning. White, fluffy clouds drifted across the sky.”</p>
          
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box'>
              <img src={HeroImg} alt='' />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-4'>
              <video src={Herovideo} alt='' controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-5'>
              <img src={HeroImg2} alt='' />
            </div>
          </Col>
          <Searchbar/>
        </Row>
      </Container>
    </section>
    {/* ===hero section start */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
          <h5 className='services__subtitle'><Subtitle Subtitle={'What We Serves'}/> </h5>
          <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <Services/>
        </Row>
      </Container>
    </section>

    {/* ====== Featured tour section start === */}
   <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'> 
          <h1 className='services__subtitle'><Subtitle Subtitle={'Explore'}/> </h1>
          <h2 className='featured__tour-title'>Our featured tours</h2>
        </Col>
        

      </Row>
    </Container>
   </section>
   <section className='pt-0'>
      <Container>
        <Row>
          {
            TourData?.map(tour=>(
            <Col lg='3' key={tour.id}><Tourcard tour={tour} /></Col>)
          )}
        </Row>
      </Container>
    </section>
   {/*===== experience */}
   <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='experience__content'>
            <h2 className='services__subtitle'><Subtitle Subtitle={'Experience....'}/> </h2>
            <h2>With our all experience<br/> we will serve you
            </h2>
            <p>When ever I feel alone or not in a good mood, <br/>I used to make a plan for travel and went for a long drive. Recently, <br/>I travelled to Goa with my friends to take a break for a long going and being <br/>boring hectic schedule of daily workj</p>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>4k</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </div>
        </Col>
        <Col lg='6'>
          <div className="experience__img">
            <img src={experience} alt=''/>
          </div>
        </Col>
      </Row>
    </Container>
   </section>
    {/*=====gellery section=====*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <h2 className='services__subtitle'><Subtitle Subtitle={'Gallery....'}/> </h2>
            <h2 className='gallery__title'>Visit out customer tour Gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImages/>
          </Col>
        </Row>
      </Container>
    </section>
    {/*=====gellery section=====*/}
    <Newslatter/>
   
   
   
    </>
  
}

export default Home