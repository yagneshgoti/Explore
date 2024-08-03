import React, { useState } from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };
  
  return (
    <section className="navBarSection">
      <header className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1>
              <MdOutlineTravelExplore className="icon" /> Explore
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#packages" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#contect" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="#about" className="navLink">
                Contect
              </a>
            </li>

              {isAuthenticated && <p> welcome {user.name}</p>}
            {
              isAuthenticated ? (<li>
              <button className="btn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
              ) : (
                <li>
              <button className="btn" onClick={() => loginWithRedirect()}>Log In</button>
            </li>
              )
            }
            
            

            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </ul>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
