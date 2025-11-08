"use client";

import Faq from "../components/faq/page";
import Link from "next/link";
import Security from "../components/security/page";
import Whychooseus from "../components/whychooseus/page";
import Unifiedbanking from "../components/unifiedbanking/page";
import 'aos/dist/aos.css';
import Images from "@/app/constants/images";
import Image from "next/image";
const Healthcare = () => {
    return (
        <>
            <div className="h-banner lg:py-40 py-20 lg:px-20 px-10 blog-banner ">
                <div className="md:max-w-[1350px] flex flex-wrap gap-16 lg:gap-0 items-center justify-between  mx-auto ">
                    <div className="lg:flex-1">
                        <h1 className="pt-10 pb-8 leading-[1.2] text-white text-start lg:text-medium-50 !font-bold text-5xl" data-aos="fade-up">
                            Comprehensive Payment   <br />Solutions for <span className="text-[#fc9d08]">  Logistics </span>  Business
                        </h1>
                        <p className="text-white text-small font-normal text-xl text-start" data-aos="fade-up">
                            Accelerate supply chain payments, verification, onboarding, and expense management <br />  to optimise logistics and distribution  processes with our financial <br /> solutions, ensuring uninterrupted business operations.            </p>
                        <div className="flex flex-wrap justify-start gap-3 mt-12" data-aos="fade-up">
                            <Link href="https://dotmik-software.readme.io/reference/authentication" className="flex items-center gap-2 banner-button">
                                Launch API
                            </Link>
                            <Link href="contactus" className="flex items-center gap-2 banner-button">
                                Let's Talk
                            </Link>
                        </div>
                    </div>
                    <div className="lg:flex-1 flex lg:justify-end justify-center">
                        <Image
                            src={Images.helthcare} alt="support" className="object-cover object-center rounded-none w-[80%] " />
                    </div>
                </div>
            </div >
            <Whychooseus />
            <Unifiedbanking />
            <Security />
        </>
    );
};

export default Healthcare;
