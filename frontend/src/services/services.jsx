import React from 'react';
import ServicesCard from './servicescard'
import { Col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guidImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData=[
  {
    imgUrl:weatherImg,
    title:'Calculate Weather',
    desc:' this is too long',
  },
  {
    imgUrl:guidImg,
    title:'Best tour Guide',
    desc:' this is too long',
  },
  {
    imgUrl:customizationImg,
    title:'Customization',
    desc:' this is too long',
  }
]

function services() {
  return <>
  { servicesData.map((item,index)=> (
     <Col lg='3' key={index}>
      <ServicesCard item={item}/>
     </Col>
    ))
  }
  </>
}

export default services