import React, { useEffect } from 'react';
import './home.css'
import video from '../../Assets/video2.mp4'
import {ImLocation} from 'react-icons/im'
import {HiFilter} from 'react-icons/hi'
import {TfiFacebook} from 'react-icons/tfi'
import {FaTripadvisor} from 'react-icons/fa'
import {TfiInstagram} from 'react-icons/tfi'
import {TbApps} from 'react-icons/tb'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

useEffect(() =>{
  Aos.init({duration : 3000})
}, []) 

  return (
   <section className='home'>
    <div className='overlay'></div>
    <video src={video} muted autoPlay loop type="video/mp4"></video>

    <div className="homeContent container">
      <div className="textDiv">
        <span className="smallText">
          Our Packages
        </span>
        <h1 className="homeTitle">
          Search your Holiday
        </h1>
      </div>
      <div className="cardDiv grid">
        <div className="destinationInput">
          <label htmlFor="city">Search your destination:</label>
          <div className="input flex">
            <input type="text" placeholder='Enter Name here'/>
            <ImLocation className="icon"/>
          </div>
        </div>

        <div className="dateInput">
          <label htmlFor="date">Select Date:</label>
          <div className="input flex">
            <input type="date"/> 
          </div>
        </div>

        <div className="priceInput">
          <div className="label_total flex">
            <label htmlFor="price">Max Price:
            </label>
            <h3 className='total'>$5000</h3>
          </div>
          <div className="input flex">
            <input type="range" max="5000" min="500" />
          </div>
        </div>
        <div className="searchOptions flex">
          <HiFilter className="icon"/>
          <span>MORE FILTERS</span>
        </div>
      </div>

      <div className="homeFooterIcons flex">
        <div className="rightIcons">
        <TfiFacebook className="icon"/>
        <TfiInstagram className="icon"/>
        <FaTripadvisor className="icon"/>

        </div>
        <div className="leftIcons">
        <AiOutlineUnorderedList className="icon"/>
        <TbApps className="icon"/>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Home