import React from "react";
import { Navbar } from "flowbite-react";
import logo from "../short-logo.png";

const Header = () => {
  return (
    <div className=" p-4 bg-white shadow-md">
    <div className="container m-auto">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 w-[150px] h-[100px] " alt="Logo" />
         
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">Privacy Policy</Navbar.Link>
          <Navbar.Link href="/navbars">Terms Condition</Navbar.Link>
          <Navbar.Link href="/navbars">About Us</Navbar.Link>
          <Navbar.Link href="/navbars">Contact Us</Navbar.Link>
          <Navbar.Link href="/navbars">Advertise</Navbar.Link>
          <Navbar.Link href="/navbars"> <div type="button" className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-md md:-mt-2">Join Now</div></Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
    </div>
  );
};

export default Header;
