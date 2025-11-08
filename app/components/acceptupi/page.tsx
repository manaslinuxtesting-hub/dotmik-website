"use client";
import { useState } from "react";
import Images from "@/app/constants/images";
import Image from "next/image";
import 'aos/dist/aos.css';

const Acceptupi = () => {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="h-banner  blog-banner !p-0">
            <div className="w-full lg:py-40  py-20 flex flex-wrap items-end justify-between gap-20 mx-auto items-center md:max-w-[1350px] px-10 ">
                {/* Tab Buttons */}
                <div className="mb-4  lg:flex-1">
                    <h2 className="pb-0 leading-[1.2] text-medium-48 !font-bold text-white pb-4 " data-aos="fade-up">  <span className="text-[#fc9d08]"> Reach  </span>new heights <br /> with UPI QR Codes</h2>
                    <p className="text-1x8 font-normal text-white pb-16">Increase Business Sales by 100%. Implement UPI QR codes that allow customers to simply scan and pay using any UPI APP.</p>
                    <ul className="flex flex-wrap flex-col -mb-px text-sm font-medium text-center">
                        {/* Profile */}
                        <li className="me-2" data-aos="fade-up">
                            <button
                                onClick={() => setActiveTab("profile")}
                                className={`flex items-start flex-col gap-2 px-4 py-8 border-l-5 rounded-lg ${activeTab === "profile"
                                    ? "text-white border-white"
                                    : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300"
                                    }`}>
                                <h4 className="text-tiny-2xl font-semibold text-white">Quickly Generate, Print & Display</h4>
                                <p className="text-white text-small font-normal">Sign-up with official email address and mobile phone number </p>
                            </button>
                        </li>

                        {/* Dashboard */}
                        <li className="me-2" data-aos="fade-up">
                            <button
                                onClick={() => setActiveTab("dashboard")}
                                className={`flex items-start flex-col gap-2 px-4 py-8 border-l-5 rounded-lg ${activeTab === "dashboard"
                                    ? "text-white border-white"
                                    : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300"
                                    }`}>
                                <h4 className="text-tiny-2xl font-semibold">Cashless & Contactless Collections</h4>
                                <p className="text-white text-small font-normal text-start">Retrieve bills for simplified bill management and payment processing. </p>
                            </button>
                        </li>

                        {/* Settings */}
                        <li className="me-2" data-aos="fade-up">
                            <button
                                onClick={() => setActiveTab("settings")}
                                className={`flex items-start flex-col gap-2 px-4 py-8 border-l-5 rounded-lg  ${activeTab === "settings"
                                    ? "text-white border-white"
                                    : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300"
                                    }`}>
                                <h4 className="text-tiny-2xl font-semibold">Generate Unique QR Codes for Each Store</h4>
                                <p className="text-white text-small font-normal">Start paying bills with just a few clicks for swift transactions </p>
                            </button>
                        </li>

                        {/* Contacts */}
                        <li className="me-2" data-aos="fade-up">
                            <button
                                onClick={() => setActiveTab("report")}
                                className={`flex items-start flex-col gap-2 px-4 py-8 border-l-5 rounded-lg  ${activeTab === "report"
                                    ? "text-white border-white"
                                    : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300"
                                    }`}>
                                <h4 className="text-tiny-2xl font-semibold">View and Analyse Reports</h4>
                                <p className="text-white text-small font-normal">Start paying bills with just a few clicks for swift transactions </p>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="lg:flex-1">
                    {/* Tab Content */}
                    {activeTab === "profile" && (
                        <div className="p-4 " data-aos="fade-up">
                            <Image
                                src={Images.index1} alt="support" quality={100}
                                className="w-full  rounded-lg" />
                        </div>
                    )}

                    {activeTab === "dashboard" && (
                        <div className="p-4 " data-aos="fade-up">
                            <Image
                                src={Images.index2} alt="support" quality={100}
                                className="w-full  rounded-lg" />
                        </div>
                    )}

                    {activeTab === "settings" && (
                        <div className="p-4 " data-aos="fade-up">
                            <Image
                                src={Images.index2} alt="support" quality={100}
                                className="w-full  rounded-lg" />
                        </div>
                    )}
                    {activeTab === "report" && (
                        <div className="p-4 " data-aos="fade-up">
                            <Image
                                src={Images.index4} alt="report" quality={100}
                                className="w-full  rounded-lg" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Acceptupi;
