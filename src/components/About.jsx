import React from "react";

const About = () => {
  return (
    <div className="container m-auto py-10 md:py-16">
      <div className="grid lg:grid-cols-3">
        <div className="col-span-2">
          <h2 className="text-5xl font-bold py-2">
            About Us
          </h2>
          <div className="text-justify py-2 md:mr-10">
            <p>We're committed to your privacy. DashCareer uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</p> <br />

            <p>We focus on Career trend, news, smart job etc. </p><br />
            <p>If you want to contact us: you can send an email to <a href="mailto: contact.deshcareer@gmail.com" className="text-blue-500 hover:underline">contact.deshcareer@gmail.com </a></p><br />
            <p>Our Office address:</p><br />
            <p>House: 13/3,</p><br />
            <p>Road: 2,</p><br />
            <p>Shyamoly, Dhaka-1207</p><br />
            <p>+8801880811047</p><br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
