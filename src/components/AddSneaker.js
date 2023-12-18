import React from 'react'

export default function AddSneaker({title, price, imgurl, functions}) {
  return (
    <div onClick={() => functions()}>
        <div className='sneaker--box'> 
          <img src={imgurl} alt='shoe' className='product--image'/>
          <h2 className='product--title'>{title}</h2>
          <h2 className='product--from'>From</h2>
          <div className='product--bottom'>
            <h2 className='product--price'>${price / 100}</h2>
          </div>     
        </div>
    </div>
  )
}
