import Announcement from '../components/Announcement/Announcement'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import Newsletter from '../Newsletter/Newsletter'
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
    </div>
  )
}

export default Home