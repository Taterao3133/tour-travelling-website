import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/commonSection'
 

import '../styles/tour.css'
import Tourcard from '../shared/TourCard'
import Searchbar from '../shared/searchbar'
import Newslatter from '../shared/newslatter'
import { Container, Row,Col } from 'reactstrap'

import useApiFetch from '../hooks/userFetch'
import { BASE_URL } from '../utils/config'



function Tour(){

  const [pageCount, setPageCount]=useState (0)
  const [page,setPage]=useState(0) 
  

  const {data:tour, loading, error}= useApiFetch(`${BASE_URL}/tour`)
  const {data:tourCount} =useApiFetch(`${BASE_URL}/tour/search/getTourCount`)

  useEffect(()=>{
    
    const pages=Math.ceil(5/4)  // later we will use backend data count
     setPageCount(pages)
     window.scrollTo(0,0)
  },[page, tourCount,tour])

  return <>
    <CommonSection title={'All Tours'}/>
    <section>
      <Container>
        <Row>
          <Searchbar/>
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Container>
        
        { loading && <h4 className='text-center pt-5'>Loading......</h4>}
        {error && <h4 className='text-center pt-5'>{error}</h4>}
       {!loading && !error &&  <Row>
          {
            tour?.map(tour=>(
            <Col lg='3' key={tour._id}>
              <Tourcard tour={tour} />
            </Col>)
          )}
          <Col lg='12'>
            <div className="pagination d-flex align-items-center justify-content-center">
                {[...Array(pageCount).keys()].map((number)=>(
                  <span key={number} onClick={()=>setPage(number)}
                  className={page ===number ? 'active__page':""}>
                    {number + 1}
                  </span>
                ))}

            </div>
          </Col>
        </Row>
        }
      </Container>
    </section>
    <Newslatter/>
    

  
  </>
}

export default Tour;