"use client";

import Link from "next/link";
import Security from "../components/security/page";
import Whychooseus from "../components/whychooseus/page";
import Unifiedbanking from "../components/unifiedbanking/page";
import Images from "@/app/constants/images";
import Image from "next/image";


import 'aos/dist/aos.css';

const Ecommerce = () => {
    return (
        <>
            <div className="h-banner lg:py-40 py-20 lg:px-20 px-10 blog-banner ">
                <div className="md:max-w-[1350px] flex  flex-wrap gap-16 lg:gap-0 mx-auto ">
                    <div className="lg:flex-1">
                        <h1 className="pt-10 pb-8 leading-[1.2] text-white text-start lg:text-medium-50 !font-bold text-5xl" data-aos="fade-up">
                            Fast & Secure <span className="text-[#fc9d08]"> Ecommerce  </span> <br />  Payments
                        </h1>
                        <p className="text-white text-small font-normal   text-start" data-aos="fade-up">
                            Take complete command of your business finances with DotMik’s integrated <br /> payment and analytics platform. From seamless transactions to real-time <br /> insights, our solution empowers you to track, manage, and optimize your cash <br /> flow with precision and confidence
                        </p>
                        <div className="flex flex-wrap justify-start gap-3 mt-12" data-aos="fade-up">
                            <Link href="/" className="flex items-center gap-2 banner-button">
                                Launch API
                            </Link>
                            <Link href="/" className="flex items-center gap-2 banner-button">
                                Let's Talk
                            </Link>
                        </div>
                    </div>
                    <div className="lg:flex-1 mx-auto">
                        <Image
                            src={Images.ebanner} alt="support" className="object-cover object-center rounded-none w-full " />
                    </div>
                </div>
            </div>
            <Whychooseus />
            <Unifiedbanking />
            <Security />
        </>
    );
};

export default Ecommerce;
