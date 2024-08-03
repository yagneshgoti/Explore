import React, { useEffect } from "react";
import "./main.css";
import img from "../../Assets/img (1).jpg";
import img2 from "../../Assets/img (2).jpg";
import img3 from "../../Assets/img (3).jpg";
import img4 from "../../Assets/img (4).jpg";
import img5 from "../../Assets/img (5).jpg";
import img6 from "../../Assets/img (6).jpg";
import img7 from "../../Assets/img (7).jpg";
import img8 from "../../Assets/img (8).jpg";
import img9 from "../../Assets/img (9).jpg";

import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the world. This palce is known for its luxurious stays and adventurous activities.",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Gunajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$550",
    description:
      "A city in center Mexico, Gunajuato is known for its history of silver minig and colonial architecture. The houses in the city are very attractively painted with the most bright colors available.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$680",
    description:
      "Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among touristsas the sunrise from the Sun Gate is simply spectacular.",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty Always interesting to be in this place.",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "According to world Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stay.",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$850",
    description:
      "The vibrant hues of the house are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the chois you are about to get here.",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkot Wat",
    location: "Combodia",
    grade: "CULTURAL RELAX",
    fees: "$770",
    description:
      "Angkot Wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Combodia. this place is known for its luxurious stays and advanturous activities.",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the moument its breatakingly beautiful. Taj Mahal is one of the seven Wonders of the World.",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Bali is an Indonesian Island and one of the best holiday destination in the Indoanesia archipelago Bali is known for its volcanic mountain history art & culture, food, temples and beatiful sandy beaches.",
  },
];

const Navbar = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id='packages' className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destination</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Navbar;
