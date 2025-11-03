"use client";

import Faq from "../components/faq/page";
import Link from "next/link";
import Security from "../components/security/page";
import Usecase from "../components/usecase/page";
import Billcategories from "../components/billcategories/page";
import Acrossbusness from "../components/acrossbusness/page";
import Billapi from "../components/billapi/page";
import Brandvouchers from "../components/brandvouchers/page";
import 'aos/dist/aos.css';
import Images from "@/app/constants/images";
import Image from "next/image";

const Utilitypayment = () => {
    return (
        <>
            <div className="h-banner lg:py-40 py-20 lg:px-20 px-10 blog-banner ">
                <div className="md:max-w-[1350px] gap-20 lg:gap-0 flex flex-wrap items-center  mx-auto ">
                    <div className="lg:flex-1">
                        <h1 className="pt-10 pb-8 leading-[1.2] text-white text-start lg:text-medium-48 !font-bold text-5xl" data-aos="fade-up">
                            All-in-One Utility Bill <br /> Payment Solution for Businesses.

                        </h1>
                        <p className="text-white text-small font-normal px-5 text-start" data-aos="fade-up">
                            Manage All Business Utility Bills From One Single Dashboard for Multiple Locations.                </p>
                        <div className="flex flex-wrap justify-start gap-3 mt-12" data-aos="fade-up">
                            <Link href="/" className="flex items-center gap-2 banner-button">
                                Launch API
                            </Link>
                            <Link href="/" className="flex items-center gap-2 banner-button">
                                Let's Talk
                            </Link>
                        </div>
                    </div>
                    <div className="lg:flex-1">
                        <Image
                            src={Images.utilitybanner} alt="support" className="object-cover object-center rounded-none w-full " />
                    </div>
                </div>
            </div>
            <Billcategories />
            <Acrossbusness />
            <Billapi />
            <Brandvouchers />
            <Faq />
            <Security />


        </>
    );
};

export default Utilitypayment;
