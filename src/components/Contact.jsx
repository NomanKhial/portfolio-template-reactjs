import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaPhoneAlt, FaSkype } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="connect bg-primary/90 py-20  min-h-screen flex md:justify-center items-center">
      <section className="max-w-[90%] mx-auto relative">
        <h2 className="absolute text-black/50 -z-10 text-6xl top-15 md:text-9xl font-bold tracking-tight">
          Contact Us
        </h2>
        <section className=" text-white flex max-w-[90%] gap-4 mx-auto  justify-between flex-wrap">
          <div className="flex flex-col gap-6 basis-1/3">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-xl">- Contact Us</span>
              <h2 className=" text-4xl md:text-6xl font-bold text-white">
                Let's <span className=" text-secondary">Conntect</span> &{" "}
                <span className=" text-secondary">Collaborate</span>
              </h2>
            </div>
            <p className=" text-xl">
              Get in touch with us. we love to hear from you! just shoot us an
              email
            </p>
            <address>
              <ul className=" flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <FaPhoneAlt
                    size={10}
                    color="#5840ba"
                    className=" rounded-full w-10 h-10  p-2 bg-white"
                  />{" "}
                  +92 3095954377
                </li>
                <li className="flex items-center gap-3">
                  <MdMarkEmailUnread
                    size={10}
                    color="#5840ba"
                    className=" rounded-full w-10 h-10  p-2 bg-white"
                  />{" "}
                  nomankhialb@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <FaSkype
                    size={10}
                    color="#5840ba"
                    className=" rounded-full w-10 h-10  p-2 bg-white"
                  />{" "}
                  nomankhial
                </li>
                <li className="flex items-center gap-3">
                  <FaLocationDot
                    size={10}
                    color="#5840ba"
                    className=" rounded-full w-10 h-10  p-2 bg-white"
                  />{" "}
                  Charbagh Battagram, Pakistan
                </li>
              </ul>
            </address>
          </div>
          <form className=" md:basis-1/2 flex flex-col gap-6">
            <div className="flex flex-wrap gap-8">
              <input
                type="text"
                inputMode="text"
                placeholder="First Name*"
                required
              />
              <input
                type="text"
                inputMode="text"
                placeholder="Last Name*"
                required
              />
            </div>
            <div className="flex  flex-wrap gap-8">
              <input
                type="text"
                inputMode="email"
                placeholder="Email*"
                required
              />
              <input
                type="tel"
                inputMode="tel"
                placeholder="Last Name*"
                required
              />
            </div>
            <input
              type="text"
              inputMode="text"
              required
              placeholder="subject*"
              className="w-full"
            />
            <textarea placeholder="Message*" required  className=" w-full"></textarea>
            <div className="flex gap-3 items-center justify-between overflow-hidden bg-white rounded-full w-60 h-14">
              <BsArrowRight
                size={40}
                color="white"
                className="ml-2 bg-primary rounded-full w-10 p-2 h-10"
              />
              <button className="flex-1 bg-secondary h-full text-gray-800 font-bold rounded-full">
                Send Message
              </button>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
}

export default Contact;
