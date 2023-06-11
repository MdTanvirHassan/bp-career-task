import React from "react";

const HomeBanner = () => {
  return (
    <div>
      <div className="container m-auto py-10 md:py-16">
        <div className="grid lg:grid-cols-3">
          <div className="col-span-2">
            <h2 className="text-5xl font-bold py-2">
              Get Smarter about your <br /> career
            </h2>
            <p className="py-2">
              Get the <b> 5-minute newsletter</b> keeping about smart career
            </p>

            <form className="bg-white py-2 shadow-md lg:mr-10">
              <label
                for="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-5 pl-10 text-sm text-gray-900 border-none focus:border-none rounded-lg bg-white 0 "
                  placeholder="Your email address"
                  required
                />

                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 ">
                  Join Free
                </button>
              </div>
            </form>

            <div className="text-justify py-5 md:mr-10">
              We're committed to your privacy. DashCareer uses the information
              you provide to contact you about our relevant content and
              services. You may unsubscribe from these communications at any
              time. For more information, check out our Privacy Policy.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
