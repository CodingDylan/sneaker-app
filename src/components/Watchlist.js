import React from 'react'
import MiniSneaker from './MiniSneaker'
import Remove from './Remove'
import AddWatch from './AddWatch'

export default function Watchlist(props) {
  React.useEffect(() => {

  }, [props.sneakers])
  return (
    <div className='watchlist--div'>
        <h2 className='watchlist--title'>My Watchlist</h2>
        <div className='watchlist--products'>
        {props.sneakers.length > 0 ? (
          <>
            {props.sneakers.map((product, index) => { 
            return <MiniSneaker title={product.value} imgurl={product.image_url} price={product.lowest_price_cents_aud} key={index} />
           })}
            <AddWatch func={props.setWatchList} id={props.id} setId={props.setId}/>
            <Remove func={props.setWatchList} />
          </>
        ) : (
          <AddWatch func={props.setWatchList} id={props.id} />
        )}
        
        </div>
    </div>
  )
}
