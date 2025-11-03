"use client";

import Faq from "../components/faq/page";
import Link from "next/link";
import Security from "../components/security/page";
import Futurereadyapi from "../components/futurereadyapi/page";
import 'aos/dist/aos.css';
import Images from "@/app/constants/images";
import Image from "next/image";

const Financialverification = () => {
    return (
        <>
            <div className="h-banner lg:py-40 py-20 lg:px-20 px-10 blog-banner ">
                <div className="md:max-w-[1350px] flex items-center flex-wrap gap-16 lg:gap-0 mx-auto ">
                    <div className="lg:flex-1">
                        <h1 className="pt-10 pb-8 leading-[1.2] text-white  lg:text-medium-50 font-normal text-5xl" data-aos="fade-up">
                            Validate Financial Data Enabling Trustworthy Transactions
                        </h1>
                        <p className="text-white text-small px-5 " data-aos="fade-up">
                            Strengthen user onboarding security with quick ID verification <br /> services, preventing fraud while ensuring seamless KYC and AML compliance.
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
                            src={Images.finncebanner} alt="support" className="object-cover object-center rounded-none w-full " />
                    </div>
                </div>
            </div>
            <Futurereadyapi />
            <Faq />
            <Security />
        </>
    );
};

export default Financialverification;
