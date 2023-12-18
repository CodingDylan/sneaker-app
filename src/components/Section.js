import React from 'react'
import MiniSneaker from './MiniSneaker'
import axios from 'axios'

export default function Section({title, query}) {
    const [sneakers, setSneakers] = React.useState([])

    async function getProduct(query) {
        const url = `https://ac.cnstrc.com/search/${query.replace(" ", "%20")}?c=ciojs-client-2.29.2&key=key_XT7bjdbvjgECO5d8&i=92097348-3075-4980-9e1b-d9ef0ca2b3d8&s=1&num_results_per_page=25&_dt=1661856326559`
        
        try {
          const response = await axios.get(url)
          setSneakers(response.data.response.results)
        } catch(err) {
          console.log(err)
        }
       
      } 
      
      React.useEffect(() => {
        getProduct(query)
    
      }, [])

  return (
    <div className='watchlist--div'>
        <h2 className='watchlist--title'>{title}</h2>
        <div className='watchlist--products'>
        {sneakers.map((product, index) => { return <MiniSneaker title={product.value} imgurl={product.data.image_url} price={product.data.lowest_price_cents_aud} key={index} />})} 
        </div>
    </div>
  )
}
