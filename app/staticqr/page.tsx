"use client";

import Faq from "../components/faq/page";
import Link from "next/link";
import Security from "../components/security/page";
import Billapi from "../components/billapi/page";
import Effectivesolution from "../components/effectivesolution/page";
import Maximiseenhance from "../components/maximiseenhance/page";
import Businesscategories from "../components/businesscategories/page";
import Reachnewheights from "../components/reachnewheights/page";
import Acceptupi from "../components/acceptupi/page";
import 'aos/dist/aos.css';
import Images from "@/app/constants/images";
import Image from "next/image";
const Staticqr = () => {
    return (
        <>
            <div className="h-banner lg:py-40 py-20 lg:px-20 px-10 blog-banner ">
                <div className="md:max-w-[1350px] flex items-center gap-5  flex-wrap gap-16 lg:gap-0 mx-auto ">
                    <div className="lg:flex-1">
                        <h1 className="pt-10 pb-8 leading-[1.2] text-white text-start lg:text-medium-50 !font-bold text-5xl" data-aos="fade-up">
                            Revolutionise Business <br /> with <span className="text-[#fc9d08]"> UPI QR Code</span>
                        </h1>
                        <p className="text-white text-small font-normal px-5 text-start" data-aos="fade-up">
                            Accept payments instantly with UPI QR Codes. Generate unique <br /> QR codes for each store and simplify collections across your entire business.
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
                            src={Images.scannerbanner} alt="support" className="object-cover object-center rounded-none w-full " />
                    </div>
                </div>
            </div>
            <Reachnewheights />
            <Acceptupi />
            <Effectivesolution />
            <Maximiseenhance />
            <Businesscategories />
            <Billapi />
            <Faq />
            <Security />


        </>
    );
};

export default Staticqr;
