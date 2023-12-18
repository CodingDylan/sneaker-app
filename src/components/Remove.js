import React from 'react'
import Add from '../images/add.png'

export default function remove({ func }) {

    function Remove() {
        func([])
    }

  return (
    <div className='add--div'>
     <img src={Add} alt='Add button' className='add--img' onClick={Remove}/>
    </div>
  )
}
