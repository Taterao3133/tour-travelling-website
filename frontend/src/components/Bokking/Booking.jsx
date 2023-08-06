import React ,{useState} from 'react'
import './booking.css'
import { Form,FormGroup,ListGroup,ListGroupItem,Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'



const Booking = ({tour,avgRating}) => {
    const {price} =tour;
    

    const navigate=useNavigate()

    const [credentials, setCredentials] =useState({
        
        userId:'01',   // later it will be dynamic
        userEmail: 'example@gmail.com',
        fullName:'',
        phone:'',
        guestSize:'1',
        bookAt:''
    })
    
    const handleChange=e=>{
       setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const ServiceFee=10
    const totalAmount=Number(price)*Number(credentials.guestSize)+Number(ServiceFee)

    // send data to the server

    const handleClick=e=>{
        e.preventDefault();
       navigate('/thankyou')
    }

  return (
    <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>${price} <span>/per person</span>
            </h3>
            <span className='tour__rating d-flex align-items-center '>
                    <i className='ri-star-fill' ></i>
                    {avgRating === 0 ? null : avgRating }
                   
                    
             </span>
        </div>

{/* =====================booking area====================== */}

        <div className="booking__form">
            <h5>Information</h5>
            <Form className='booking__info-form' onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder='FUll Name' id='fullName' required onChange={handleChange} />
                    <input type="number" placeholder='Phone' id='Phone' required onChange={handleChange} />
                    <input type="Date" placeholder='Date' id='Date' required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="Date" placeholder='' id='bookAt' required onChange={handleChange} />
                    <input type="number" placeholder='GestSizenk' id='guestSize' required onChange={handleChange} />

                </FormGroup>
            </Form>
        </div>
{/*  ===================== booking area end ============== */}
        <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>${price} <i className='ri-close-line'></i> 1 person</h5>
                    <span> ${price}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                    <h5>Service charge</h5>
                    <span> ${ServiceFee}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0' >
                    <h5 id='total' > Total</h5>
                    <span id='total'> ${totalAmount}</span>
                </ListGroupItem>
            </ListGroup>

            <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
        </div>
    </div>
  )
}

export default Booking
