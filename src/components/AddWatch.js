import React from 'react'
import Add from '../images/add.png'
import Modal from '@mui/material/Modal';
import SearchBar from './search';
import axios from 'axios';
import AddSneaker from './AddSneaker';

export default function AddWatch({ func, id, setId}) {

  const [open, setOpen] = React.useState(false);
  const [sneaker, setSneaker] = React.useState({});
  const [searchQuery, setSearchQuery] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setSneaker({})
    setOpen(false)
  }

  function addSneaker() {
    func(prev => {
      return [...prev, sneaker]
    })

    setId(prev => prev + 1)
    if (open === true) {
      handleClose()
    }
    setSneaker({})
  }

  async function getProduct(query) {
    if (query === "") {
      query = "dunks"
    }
    const url = `https://ac.cnstrc.com/search/${query.replace(" ", "%20")}?c=ciojs-client-2.29.2&key=key_XT7bjdbvjgECO5d8&i=92097348-3075-4980-9e1b-d9ef0ca2b3d8&s=1&num_results_per_page=25&_dt=1661856326559`
    
    

    try {
      const response = await axios.get(url)


      const shoe = {
        value: response.data.response.results[1].value,
        image_url: response.data.response.results[1].data.image_url,
        lowest_price_cents_aud: response.data.response.results[1].data.lowest_price_cents_aud,
        id: id + 1
      }

      setSneaker(shoe)

    } catch(err) {
      console.log(err)
    }
   
  } 

  return (
    <div className='add--div'>
      <img src={Add} alt='Add button' className='add--img' onClick={handleOpen}/>
      <Modal
      open={open}
      onClose={handleClose}>
      <div className='add--box'>
        <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        getProduct={getProduct}
      />
        {sneaker ? <AddSneaker title={sneaker.value} imgurl={sneaker.image_url} price={sneaker.lowest_price_cents_aud} functions={addSneaker}/> : <img src={Add} alt='Add button' className='add--img' onClick={addSneaker}/> }
        
      </div>
      </Modal>
    </div>
  )
}
