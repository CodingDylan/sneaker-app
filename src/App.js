import React from 'react';
import Products from './components/Products';
import './App.css'
import Watchlist from './components/Watchlist';
import Section from './components/Section';



function App() {
  const [watchlist, setWatchList] = React.useState(JSON.parse(localStorage.getItem('watch')) || [])
  const [id, setId] = React.useState(JSON.parse(localStorage.getItem('id')) || 0)

  React.useEffect(() => {
    localStorage.setItem('watch', JSON.stringify(watchlist))
  }, [watchlist])

  React.useEffect(() => {
    localStorage.setItem('id', JSON.stringify(id))
  }, [id])

  return (
    <div className='App'>
      <Watchlist sneakers={watchlist} setWatchList={setWatchList} id={id} setId={setId} />
      <Section title='Trending Nike Sneakers' query='nike' />
      <Section title="Tending Yeezy's" query='yeezy boost' />
      <Section title='Trending Yeezy Slides' query='yeezy slides' />
      <Products />
    </div>
  );
}

export default App;
