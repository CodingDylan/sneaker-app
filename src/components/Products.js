import React from 'react';
import SearchBar from './search';
import axios from 'axios';
import Sneaker from './Sneaker'

export default function Products() {
  const [searchQuery, setSearchQuery] = React.useState('dunk');
  const [sneakers, setSneakers] = React.useState([])

 async function getProduct(query) {
    const url = `https://ac.cnstrc.com/search/${query.replace(" ", "%20")}?c=ciojs-client-2.29.2&key=key_XT7bjdbvjgECO5d8&i=92097348-3075-4980-9e1b-d9ef0ca2b3d8&s=1&num_results_per_page=25&_dt=1661856326559`
    
    try {
      const response = await axios.get(url)
      setSneakers(response.data.response.results)
      console.log(response)
    } catch(err) {
      console.log(err)
    }
   
  } 
  

  React.useEffect(() => {
    getProduct(searchQuery)

  }, [])
  return (
    <div>
      <SearchBar 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      getProduct={getProduct}
      />
      <div className='sneaker--boxes'>
      {sneakers.map((product, index) => { return <Sneaker title={product.value} imgurl={product.data.image_url} price={product.data.lowest_price_cents_aud} key={index} />})} 
      </div>
    </div>
  )
}
