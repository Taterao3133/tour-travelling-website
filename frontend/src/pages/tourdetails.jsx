
import '../styles/tour-details.css'
import React , {
useParams } from 'react-router-dom'
import TourData from '../assets/data/tours'
import { Container,Row,Col,Form,ListGroup } from 'reactstrap'
import calculateAvgrating from '../utils/avgRating'

import Avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Bokking/Booking'
import { useRef, useState } from 'react'
import useFetch from '../hooks/userFetch'
import { BASE_URL } from '../utils/config'


const Tourdetails=()=> {
  const {_id}= useParams();
  const reviewMsgRef=useRef('')
  const [tourRating, setTourRating]=useState(null)

  // this is an static data later we will call our api load our data from database
  // const tour=TourData.find(tour=>tour._id===_id)
  
  //fetching data from database
  const {data:tour}=useFetch(`${BASE_URL}/tour/${_id}`)

  if (!tour) {
    // Handle the case when 'tour' is undefined
    return <div>Loading...</div>; // it will show a loading message
  }


  //destructure properites from tour object
 let {photo, title,desc, price,reviews, address, city, distance, maxGroupSize}=tour || {}


  const {totalRating ,avgRating}=calculateAvgrating(reviews)
  // formate date
  const options={day:'numeric', month:'long', year:'numeric'};

  // submit request to the server
  const submitHandler =e =>{
    e.prevenDefault();
    const reviewText=reviewMsgRef.current.value;

    alert(`${reviewText},${tourRating}`);
     console.log(`${reviewText},${tourRating}`);

    //later we will call our api
  }


  return <>
   <section>
    <Container>
      <Row>
        <Col  lg='8'>
          <div className='tour__content'>
            <img src={photo} alt=''/>
            <div className='tour__info'>
              <h2>{title}</h2>
              <div className='d-flex align-items-center gap-5'>

                
                <span className='tour__rating d-flex align-items-center gap-1'>
                    <i className='ri-star-fill' style={{'color':'var(--secondary-color)'}}></i>{avgRating === 0 ? null : avgRating }
                    {totalRating===0 ?('not rated'):(<span>({reviews?.length})</span>)} 
                    
                </span>
  
                <i className="ri-map-pin-user-fill">{address}</i>

              </div>
              <div className="tour__extra-details">
                <span><i className="ri-map-pin-line"></i>  {city}    </span>
                <span><i className="ri-money-dollar-circle-line"></i> ${price} /person    </span>
                <span><i className="ri-map-pin-time-line"></i> {distance} / K/m  </span>
                <span><i className="ri-group-line"></i>{maxGroupSize}  People   </span>
              </div>
              <h5>Description
              </h5>
              <p>{desc}</p>
            </div>
            {/* =============tour reviews section ======*/}
            <div className="tour__reviews mt-4">
              <h4> Reviews ({reviews?.length})</h4>
              <Form onSubmit={submitHandler}>
                <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                  <span onClick={()=> setTourRating(1)}>1<i className="ri-star-s-fill"></i></span>
                  <span onClick={()=> setTourRating(2)}>2<i className="ri-star-s-fill"></i></span>
                  <span onClick={()=> setTourRating(3)}>3<i className="ri-star-s-fill"></i></span>
                  <span onClick={()=> setTourRating(4)}>4<i className="ri-star-s-fill"></i></span>
                  <span onClick={()=> setTourRating(5)}>5<i className="ri-star-s-fill"></i></span>
                </div>
                <div className="review__input " >
                  <input type='text' ref={reviewMsgRef} placeholder='share your thoughts..' required/>
                  <button className='btn primary__btn text-white ' type='submit'>
                     Submit
                  </button>
                </div>
              </Form>
              <ListGroup className='user__review'>
                {
                  reviews?.map(reviews=>(
                    <div className='review__item'>
                      <img src={Avatar} alt=''/>
                      <div className="w-100">
                        <div className="d-flex align-itmes-cnter justify-content stars">
                          <div>
                            <h5>Taterao</h5>
                            <p>{new Date('09-18-2023').toLocaleDateString('en-Us',options)}
                            </p>  {/* it will work for backend */}
                          </div>
                          <span className='d-flex align-items-center'>
                            5<i className='ri-star-s-fill'></i>

                          </span>
                        </div>
                        <h6>Amazing Tour</h6>
                      </div>
                    </div>
                  ))
                }
              </ListGroup>
            </div>


            {/* =============tour reviews section end ======*/}

          </div>
        </Col>
        <Col lg='4'>
           <Booking tour={tour} avgRating={avgRating}/>
        </Col>
      </Row>
    </Container>
   </section>
 
  </>
}

export default Tourdetails;