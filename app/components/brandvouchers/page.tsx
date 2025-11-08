"use client";
import { useState } from "react";
import Images from "@/app/constants/images";
import Image from "next/image";
import 'aos/dist/aos.css';

const Brandvouchers = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="w-full lg:py-20 flex flex-wrap justify-between gap-20 mx-auto items-center md:max-w-[1350px] px-10 py-20 lg:py-0">
      {/* Tab Buttons */}
      <div className="mb-4  lg:flex-1">
        <h2 className="text-medium-48 !font-bold">Get <span className="text-[#fc9d08]">Started </span> </h2>
        <p className="pb-20 font-normal text-small ">Manage and pay all your utility bills anytime, anywhere using our
          centralised dashboard or mobile app, available 24/7.</p>
        <ul className="flex flex-wrap flex-col -mb-px text-sm font-medium text-center">
          {/* Profile */}
          <li className="me-2" data-aos="fade-up">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-start flex-col gap-2 px-4 py-8 border-l-5 rounded-lg ${activeTab === "profile"
                ? "text-black border-black"
                : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300"
                }`} >

              <h4 className="text-tiny-2xl font-medium">Sign-up</h4>
              <p  className="text-xextra-small font-medium">Sign-up with official email address and mobile phone number </p>
            </button>
          </li>

          {/* Dashboard */}
          <li className="me-2" data-aos="fade-up">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-start flex-col gap-2 px-4 py-8 border-l-5 rounded-lg ${activeTab === "dashboard"
                ? "text-black border-black"
                : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300"
                }`}>

              <h4 className="text-tiny-2xl font-medium">Fetch Bills </h4>
              <p  className="text-xextra-small font-medium">Retrieve bills for simplified bill management and payment processing. </p>
            </button>
          </li>

          {/* Settings */}
          <li className="me-2" data-aos="fade-up">
            <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-start flex-col gap-2 px-4 py-8 border-l-5 rounded-lg  ${activeTab === "settings"
                ? "text-black border-black"
                : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300"
                }`}
            >

              <h4 className="text-tiny-2xl font-medium">Pay Now!</h4>
              <p className="text-xextra-small font-medium">Start paying bills with just a few clicks for swift transactions </p>
            </button>
          </li>

          {/* Contacts */}

        </ul>
      </div>
      <div className="lg:flex-1 mx-auto">
        {/* Tab Content */}
        {activeTab === "profile" && (
          <div className="p-4 " data-aos="fade-up">
            <Image
              src={Images.singin} alt="support" quality={100}
              className="w-full  rounded-lg" />
          </div>
        )}

        {activeTab === "dashboard" && (
          <div className="p-4 " data-aos="fade-up">
            <Image
              src={Images.singin} alt="support" quality={100}
              className="w-full  rounded-lg" />
          </div>
        )}

        {activeTab === "settings" && (
          <div className="p-4 " data-aos="fade-up">
            <Image
              src={Images.singin} alt="support" quality={100}
              className="w-full  rounded-lg" />
          </div>
        )}


      </div>

    </div>
  );
};

export default Brandvouchers;
