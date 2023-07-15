import React, {useEffect} from 'react'
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(() =>{
    Aos.init({duration: 2000})
  })

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div data-aos="fade-up" className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div data-aos="fade-up" className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />{" "}
            </button>
          </div>
        </div>

        <div data-aos="fade-up" className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </a>
            </div>

            <div className="footerParagraph">
              Welcome to our travel website, your ultimate destination for
              discovering the world's most incredible places. Whether you're a
              seasoned explorer or a first-time traveler, our platform is
              designed to inspire and assist you in planning your next
              adventure.
            </div>

            <div className="footerSocials flex">
              <BsTwitter className="icon" />
              <BsLinkedin className="icon" />
              <BsFacebook className="icon" />
            </div>
          </div>

          
          <div data-aos="fade-up" className="footerLinks grid">
            {/* //Group 1 */}
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Service
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Payment
              </li>
            </div>

            {/* //Group 2 */}
          <div className="linkGroup">
            <span className="groupTitle">PARTNERS</span>

            <li className="footerList flex">
              <AiOutlineRight className="icon" />
              Bookings
            </li>

            <li className="footerList flex">
              <AiOutlineRight className="icon" />
              Rents Car
            </li>

            <li className="footerList flex">
              <AiOutlineRight className="icon" />
              Hotel World
            </li>

            <li className="footerList flex">
              <AiOutlineRight className="icon" />
              Travigo
            </li>

            <li className="footerList flex">
              <AiOutlineRight className="icon" />
              Trip Advisor
            </li>
          </div>

          {/* Group 3 */}
          <div className="linkGroup">
            <span className="groupTitle">LAST MINUTE</span>

            <li className="footerList flex">
              <AiOutlineRight className="icon" />
              London
            </li>

            <li className="footerList flex">
              <AiOutlineRight className="icon" />
              New York
            </li>

            <li className="footerList flex">
              <AiOutlineRight className="icon" />
              California
            </li>

            <li className="footerList flex">
              <AiOutlineRight className="icon" />
              Thailand
            </li>

            <li className="footerList flex">
              <AiOutlineRight className="icon" />
              Europe
            </li>
          </div>

          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHT RESERVED - PATSAWEE 2023</small>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Footer;
