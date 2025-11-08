"use client";

import Faq from "../components/faq/page";
import Link from "next/link";
import Security from "../components/security/page";
import Futurereadyapi from "../components/futurereadyapi/page";
import 'aos/dist/aos.css';
import Images from "@/app/constants/images";
import Image from "next/image";
const Businessverification = () => {
    return (
        <>
         
              <div className="h-banner lg:py-40 !pb-30 pt-6 lg:px-20 px-10 blog-banner ">
                <div className="md:max-w-[1350px] flex  items-center flex-wrap gap-16 lg:gap-0 mx-auto ">
                    <div className="lg:flex-1">
                        <h1 className="pt-0 pb-8 leading-[1.2] text-white text-start lg:text-medium-50 !font-bold text-5xl" data-aos="fade-up">
                              Automate <span className="text-[#fc9d08]">  KYB & Streamline </span> <br /> Business Onboarding
                        </h1>
                        <p className="text-white text-small font-normal   text-start" data-aos="fade-up">
                    Strengthen user onboarding security with quick ID verification <br /> services, preventing fraud while ensuring seamless KYC and AML compliance.
                        </p>
                        <div className="flex flex-wrap justify-start gap-3 mt-12" data-aos="fade-up">
                            <Link href="https://dotmik-software.readme.io/reference/authentication" className="flex items-center gap-2 banner-button">
                                Launch API
                            </Link>
                            <Link href="contactus" className="flex items-center gap-2 banner-button">
                                Let's Talk
                            </Link>
                        </div>
                    </div>
                    <div className="lg:flex-1 mx-auto">
                        <Image
                            src={Images.bussnessveris} alt="support" className="object-cover object-center rounded-none w-full  md:w-[80%]  ml-auto" />
                    </div>
                </div>
            </div>
            <Futurereadyapi />
            <Faq />
            <Security />
        </>
    );
};

export default Businessverification;
