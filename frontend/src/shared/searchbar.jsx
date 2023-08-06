
import React, {useRef}from 'react'
import './searchbar.css'
import {Col, Form, FormGroup} from 'reactstrap'

import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'


function Searchbar() {

    const locationRef=useRef('')
    const distanceRef=useRef(0)
    const maxGroupsizeRef=useRef(0)
    const navigate=useNavigate()

    const searchHandler= async()=>{
        const location=locationRef.current.value
        const distance=distanceRef.current.value
        const maxGroupsize=maxGroupsizeRef.current.value
        
        if(location===''|| distance===''|| maxGroupsize===''){
            return alert('All fields are required')
        }
        const res = await fetch(`${BASE_URL}/tour/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupsize}`)
         
        if(!res.ok) alert('Something went wrong')

        const result = await res.json()
        navigate(`/tour/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupsize}`, {state:result.data})

    }


  return <Col lg='12'>
    <div className='search-bar'>
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-map-pin-line"></i></span>
                <div>
                    <h6>Location</h6>
                    <input type='text' placeholder='where are you going' ref={locationRef}/>

                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-map-pin-time-line"></i></span>
                <div>
                    <h6>Distance</h6>
                    <input type='number' placeholder='distance k/m  ' ref={distanceRef}/>

                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-group-line"></i></span>
                <div>
                    <h6>Max People</h6>
                    <input type='number' placeholder='0' ref={maxGroupsizeRef}/>

                </div>
            </FormGroup>
            <span className='search-icon' type='submit' onClick={searchHandler}>
            <i class='ri-search-line'></i>
            </span>
            
        
        </Form>
    </div>
  </Col>
    
  
}

export default Searchbar;