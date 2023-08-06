import React from 'react'
import './servicescard.css'

const servicescard = ({item}) => {
  const { imgUrl, title, desc }=item;
  return <div className='services__item'>
      <div className='services__img'>
        <img src={imgUrl} alt=''/>
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  
}

export default servicescard;
