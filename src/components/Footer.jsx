import React from "react";
import { BsArrowRight } from "react-icons/bs";
import logo from "../assets/woman-8852668_1920.jpg";
import { FaFacebook } from "react-icons/fa6";
import { FaBehance, FaInstagram, FaPlane, FaTwitter, FaYoutube } from "react-icons/fa";
import NavbarItems from "../components/Navbar/data.js";
import { Link } from "react-router";
function Footer() {
  const socialIcons = [
    FaFacebook,
    FaBehance,
    FaYoutube,
    FaTwitter,
    FaInstagram,
  ];
  return (
    <footer>
      <section className="w-[90%] mx-auto h-full  py-20 flex flex-col gap-10 ">
        {/* top section */}
        <section className="flex justify-between items-center pb-6 border-b border-black/10 ">
          <h2 className=" text-4xl  font-bold">
            Let's <span className=" text-primary">Connect</span> there
          </h2>
          <div className="flex gap-3 items-center justify-between overflow-hidden bg-black rounded-full w-60 h-14">
            <BsArrowRight
              size={40}
              color="black"
              className="ml-2 bg-white rounded-full w-10 p-2 h-10"
            />
            <button className="flex-1 bg-secondary h-full text-gray-800 font-bold rounded-full">
              Hire Me Now
            </button>
          </div>
        </section>

        {/* main footer */}
        <section className=" flex  flex-wrap justify-between  border-b border-black/10 py-10 text-slate-600">
          <article className="flex flex-col gap-10 basis-1/3">
            <header className="flex gap-2 items-center w-60">
              <img
                src={logo}
                alt="logo"
                className=" max-w-[60px] rounded-full"
                loading="lazy"
              />
              <h2 className="text-xl  font-bold">Noman Khial</h2>
            </header>
            <p className="  leading-6">
              Noman Khial. React and React Native Developer. React and React
              Native Developer. React and React Native Developer. React and React Native Developer. React and React Native Developer.   
            </p>
            <div className="flex gap-3">
              {socialIcons.map((Icon, index) => (
               <div className=" bg-primary w-10 h-10 rounded-full p-2 grid place-content-center cursor-pointer">
                 <Icon
                  color="white"
                  size={20} 
                  key={index}
                />
               </div>
              ))}
            </div>
          </article>
          {/* Navugation */}
          <div className=" flex flex-col gap-6">
            <h2 className="text-primary font-bold text-2xl ">Navigation</h2>
            <ul className="flex flex-col gap-4 ">
              {NavbarItems.map((navLink, idx) => (
                <li key={idx}>
                  <Link to={`#${navLink.toLowerCase()}`}>{navLink}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* contact */}
          <div className=" flex flex-col gap-6">
            <h2 className="text-primary font-bold text-2xl">Contact</h2>
            <ul className="flex flex-col gap-4 ">
              <li>+92 3095954377</li>
              <li>nomankhialb@gmail.com</li>
              <li>Charbagh, Battagram</li>
              <li>MERN STACK DEVELOPER</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 ">
                <h2 className="text-primary font-bold text-2xl">Get the latest information</h2>
                <form className="flex itams-center h-12  rounded-xl overflow-hidden">
                    <input required className=" h-full flex-1  p-2  pl-6 outline-none bg-slate-100" type="text" inputMode="email"  placeholder="Enter address"/>
                    <button type="submit" className=" bg-primary text-xl h-full w-10 grid place-content-center cursor-pointer">
                   <FaPlane color="white"  size={20}/>
                    </button>
                </form>
          </div>
        </section>

        {/* bottom section */}
        <section  className=" text-gray-800 flex justify-between items-center flex-wrap">
            <p>Copyright © {new Date().getFullYear()} NomanKhial. All Rights Reserved. </p>
            <ul className="flex gap-2">
                <li><Link>User Terms & Conditions</Link></li>
                | <li><Link>Privacy Policy</Link></li>
            </ul>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
