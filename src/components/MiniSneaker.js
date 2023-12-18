import React from 'react'
import goat from '../images/goat.png'
export default function MiniSneaker({title, price, imgurl}) {
  return (
    <div>
        <div className='mini--sneaker--box'> 
          <img src={imgurl} alt='shoe' className='mini--product--image'/>
          <h2 className='mini--product--title' >{title}</h2>
          <h2 className='mini--product--from'>From</h2>
          <div className='mini--product--bottom'>
          <h2 className='mini--product--price'>${price / 100}</h2>
          <span className='mini--product--on'> On</span>
          <a href='https://www.goat.com/'>
          <img src={goat} alt='mini--Goat Sneakers' className='product--sticker' />
          </a>
          </div>
        </div>
    </div>
  )
}
