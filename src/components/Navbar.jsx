import { useState } from "react";
import "../style/Toggle.css";
import Profile from "./Userprofile";
import logo from '/logo/logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [logged , setLogged] = useState(false)

  const toggleMenu = () => {
    setOpen(!open);
  };
function setuser(){
  setLogged(true)
}
  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-[#eeb753]">
      <nav className="w-[85%] mx-auto flex justify-between items-center h-[4rem]">
        <div className="overflow-hidden">
          <img src={logo} alt="logo" className="w-16"/>
        </div>
        <div className="nav-menu max-sm:hidden">
          <ul className="flex gap-5">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          {
          <div onClick={setuser}>

         { !logged ? <span>Sign up</span> : <Profile/>}
          </div>}
          <div
            className={`hamburger ${open ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`nav-menu ${open ? "active" : ""} sm:hidden`}>
          <ul className="flex flex-col items-center gap-5">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
