import React from 'react'
import goat from '../images/goat.png'
export default function Sneaker({title, price, imgurl}) {
  return (
    <div>
        <div className='sneaker--box'> 
          <img src={imgurl} alt='shoe' className='product--image'/>
          <a href='https://www.w3schools.com'>
          <h2 className='product--title'>{title}</h2>
          </a>
          <h2 className='product--from'>From</h2>
          <div className='product--bottom'>
          <h2 className='product--price'>${price / 100}</h2>
          <span className='product--on'> On</span>
          <a href='https://www.goat.com/'>
          <img src={goat} alt='Goat Sneakers' className='product--sticker' />
          </a>
          </div>
            
          </div>
    </div>
  )
}
