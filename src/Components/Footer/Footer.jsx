import React, { useEffect } from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div id="contect" className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
            <small>Phone No:- +11234567890</small>
            <br></br>
            <small>Office Adress:- 16th street, 120 Aldone Center, Brondane, Califonia, USA, 5992 </small>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icons" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                About
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Explore is one of USA leading online travel portals, offering
              holiday packages in Worldwild. Explore offers value for money
              packages, luxury packages, group departures as well as customized
              packages. Explore was one of the first aggregators of holiday
              packages and since 2019 it has provided a forum for agents and
              holiday package sellers to sell their packages directly on the
              Explore website. This has enabled E#xplore to give a wide range of
              holiday packages including niche and exotic packages to its
              customers, while providing localised services.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiOutlineYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="iocn" />
            </div>
          </div>

          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNER</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Booking
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europ
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE - EXPLORE</small>
            <small>COPYRIGHTS RESERVED - EXPLORE 2024</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
