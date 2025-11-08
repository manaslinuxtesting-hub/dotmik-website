"use client";
import { useState } from "react";
import Images from "@/app/constants/images";
import Image from "next/image";
import Icons from "@/app/constants/Icons";
import 'aos/dist/aos.css';


const Apineed = () => {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="w-full lg:py-20  gap-20 mx-auto items-center md:max-w-[1350px] ">
            <h2 className=" leading-[1.2] text-center lg:text-medium-2xl pb-2 !font-semibold text-5xl" data-aos="fade-up">
                Experience the New Age <br />
                <span className="text-[#fc9d08]"> API Banking  </span>Platform
            </h2>
            <p className="text-small font-normal px-5 pb-8 text-center" data-aos="fade-up">
                Integrate banking services into your app to build innovative digital products <br /> faster across industries.
            </p>
            {/* Tab Buttons */}
            <div className="mb-4  flex-1">

                <ul className="flex flex-wrap flex-row mx-auto justify-center -mb-px text-sm font-medium text-center">
                    {/* Profile */}
                    <li className="me-2" data-aos="fade-up">
                        <button
                            onClick={() => setActiveTab("profile")}
                            className={`flex items-start flex-col gap-2 px-4 py-8 border-b-5 rounded-lg ${activeTab === "profile"
                                ? "text-black border-black"
                                : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300"
                                }`} >

                            <h4 className="text-small font-medium">Banking Services</h4>
                        </button>
                    </li>

                    {/* Dashboard */}
                    <li className="me-2" data-aos="fade-up">
                        <button
                            onClick={() => setActiveTab("dashboard")}
                            className={`flex items-start flex-col gap-2 px-4 py-8 border-b-5 rounded-lg ${activeTab === "dashboard"
                                ? "text-black border-black"
                                : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300"
                                }`}>

                            <h4 className="text-small font-medium">End-to-end Verification </h4>
                        </button>
                    </li>

                </ul>
            </div>
            <div className="flex-1" data-aos="fade-up">
                {/* Tab Content */}
                {activeTab === "profile" && (
                    <div className="p-4 flex flex-wrap justify-center gap-5 ">
                        <div className="flex flex-col border border-gray-300 p-5 rounded-lg  md:w-[32%] w-full">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#ddd] p-2.5 rounded-full mb-4"
                            />
                            <h4 className="pt-8 text-1x8  font-bold leading-none pb-4">BANKING</h4>
                            <p className="pt-2 text-xextra-small  font-light "> Make banking simple and accessible with our APIs! Verify accounts, validate UPI handles, confirm BINs, and access IFSC codes - all to ensure secure transactions and prevent fraud. </p>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-5 rounded-lg   md:w-[32%] w-full      ">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#ddd] p-2.5 rounded-full mb-4"
                            />
                            <h4 className="pt-8 text-1x8  font-bold leading-none pb-4">CARDS</h4>
                            <p className="pt-2 text-xextra-small  font-light">Empower your business with our card management solutions. Order physical cards, activate accounts, load amounts, check balances, enable channels, and much more - simplifying corporate expense and gift card operations. </p>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-5 rounded-lg md:w-[32%] w-full">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#ddd] p-2.5 rounded-full mb-4"
                            />
                            <h4 className="pt-8 text-1x8  font-bold leading-none pb-4">PAYOUTS</h4>
                            <p className="pt-2 text-xextra-small  font-light ">Automate your payout workflows with our plug-and-play APIs! Instantpay's robust and feature-rich Payouts APIs seamlessly integrate, ensuring automated disbursements for unmatched efficiency and security.</p>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-5 rounded-lg md:w-[32%] w-full">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#ddd] p-2.5 rounded-full mb-4 "
                            />
                            <h4 className="pt-8 text-1x8  font-bold leading-none pb-4">COLLECTION</h4>
                            <p className="pt-2 text-xextra-small  font-light"> Boost collections with our seamless payment solutions. Integrate dynamic/static QR codes and virtual accounts to enable frictionless UPI-based payments. Simplify receivables management and accelerate cash flows for your business. </p>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-5 rounded-lg md:w-[32%] w-full">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#ddd] p-2.5 rounded-full mb-4"
                            />
                            <h4 className="pt-8 text-1x8  font-bold leading-none pb-4">FINANCIAL INCLUSION</h4>
                            <p className="pt-2 text-xextra-small  font-lightl "> With our cutting-edge APIs, we're democratizing access to essential financial services, making it easier for businesses to contribute to inclusivity and economic empowerment. </p>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-5 rounded-lg md:w-[32%] w-full">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#ddd] p-2.5 rounded-full mb-4"
                            />
                            <h4 className="pt-8 text-1x8  font-bold leading-none pb-4">MARKETPLACE</h4>
                            <p className="pt-2 text-xextra-small  font-light ">Expand your offerings and drive growth with our prebuilt marketplace solutions. Our easy-to-integrate APIs enable you to tap into new revenue streams and provide unparalleled convenience to your customers. </p>
                        </div>
                    </div>
                )}

                {activeTab === "dashboard" && (
                    <div className="p-4 flex flex-wrap justify-center gap-5 ">
                        <div className="flex flex-col border border-gray-300 p-5 rounded-lg  md:w-[32%] w-full">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#ddd] p-2.5 rounded-full mb-4 "
                            />
                            <h4 className="pt-8 text-1x8  font-bold leading-none pb-4">FINANCIAL VERIFICATIONS</h4>
                            <p className="pt-2 text-xextra-small  font-light ">Make banking simple and accessible with our APIs! Verify accounts, validate UPI handles, confirm BINs, and access IFSC codes - all to ensure secure transactions and prevent fraud. </p>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-5 rounded-lg   md:w-[32%] w-full      ">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#ddd] p-2.5 rounded-full mb-4   "
                            />
                            <h4 className="pt-8 text-1x8  font-bold leading-none pb-4">IDENTITY VERIFICATION</h4>
                            <p className="pt-2 text-xextra-small  font-light "> Verify users and customers seamlessly by integrating advanced identity verification processes with a flexible architecture. Prioritise security & efficiency while eliminating the risk of impersonation.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Apineed;
