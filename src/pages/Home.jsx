import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Delivery from '../components/Delivery'
import Api from '../components/Api'
import Offers from '../components/Offers' 

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Categories />
      <Offers />        
      <Delivery />
      <Api />
      <Footer />
    </div>
  )
}