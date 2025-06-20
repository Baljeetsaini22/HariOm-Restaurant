import { useState } from "react";
import "../style/Toggle.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full bg-yellow-400">
      <nav className="w-[85%] mx-auto flex justify-between items-center h-[4rem] relative ">
        <div>
          <h2>HOB</h2>
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
          <a href="00">Sign in</a>
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
}
export default Navbar;
