import React from "react";
import logo from "../short-logo.png";
// import { Link } from 'react-router-dom'
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
// import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="p-5 bg-[#0F0D32] text-white/[.7]">
      <div className="justify-center items-center text-center m-auto space-x-3 py-5 flex">
        <span className="border border-gray-50 px-1 rounded-md">
          <BsFacebook className=" text-2xl hover:text-gray-200" />
        </span>
        <span className="border border-gray-50 px-1 rounded-md">
          <AiFillYoutube className=" text-2xl hover:text-gray-200" />
        </span>
        <span className="border border-gray-50 px-1 rounded-md">
          <AiFillLinkedin className=" text-2xl hover:text-gray-200" />
        </span>
      </div>
      <div className="container m-auto py-2 px-2">
        <div className="grid lg:grid-cols-3 gap-0">
          <div className="md:col-span-1 px-4 justify-center lg:justify-start items-start lg:items-center text-center lg:text-start">
            <img src={logo} alt="logo" className="w-[200px] h-[70px]" />
            <div className="py-2">
              <p className="text-justify uppercase text-white/[.7] font-thin px-4 pb-2">
                Desh Career is Career based newsletter in Bengali language. This
                newsletter has published weekly. This is published in every
                Saturday at 12.00 PM.
              </p>
            </div>
          </div>
          <div className="col-span-1 items-center justify-center text-center pb-2">
            <h2 className="text-lg font-bold">Privacy and Terms</h2>
            <ul className="md:py-10 py-2 space-y-3">
              <li>
                <a href="/#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/#" className="hover:text-white">
                  Term and Condition
                </a>
              </li>
              <li>
                <a href="/#" className="hover:text-white">
                  FQA
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 items-end justify-center lg:justify-end text-center lg:text-end">
            <h2 className="text-lg font-bold">Support</h2>
            <ul className="md:py-10 py-2 space-y-3">
              <li>
                <a href="/#" className="hover:text-white">
                  Affiliate Link
                </a>
              </li>
              <li>
                <a href="/#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/#" className="hover:text-white">
                  Advertise with us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <footer className=" rounded-lg shadow m-4">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-base text-white sm:text-center dark:text-gray-400">
              © 2023 Newsletter E-mail Service: All Copy right reserved
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-base font-medium text-white sm:mt-0">
              <li>
                <a href="/#" className="mr-4 md:mr-6 ">
                 Terms
                </a>
              </li>
              <li>
                <a href="/#" className="mr-4 md:mr-6">
                 cookie Policy
                </a>
              </li>
              <li>
                <a href="/#" className="mr-4 md:mr-6">
                 Terms
                </a>
              </li>
              <li>
                <a href="/#" className="">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
