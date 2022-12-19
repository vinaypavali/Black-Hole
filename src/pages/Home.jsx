import React from 'react'
import './Home.css'
import Search from '../components/Search'

function Home() {
  return (
     
        <div className='home_body'>
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
            <Search />
        </div>
     
  )
}

export default Home