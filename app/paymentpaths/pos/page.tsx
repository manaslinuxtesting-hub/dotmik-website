"use client";

import Faq from "../components/faq/page";
import Link from "next/link";
import Security from "../components/security/page";
import Posapi from "../components/posapi/page";
import Brandvouchers from "../components/brandvouchers/page";
import Effectivesolution from "../components/effectivesolution/page";
import Maximiseenhance from "../components/maximiseenhance/page";
import Businesscategories from "../components/businesscategories/page";
import 'aos/dist/aos.css'; 
import Images from "@/app/constants/images";
import Image from "next/image";

const Pos = () => {
    return (
        <>
            <div className="h-banner py-40 !pb-0 lg:px-20 px-10 blog-banner ">
                <h1 className="pt-10 pb-8 leading-[1.2] text-white text-center lg:text-5lg !font-bold text-5xl" data-aos="fade-up">
                    Accept Digital Payments with <br />
                    Instantpay POS
                </h1>
                       <p className="text-white lg:text-1x8 font-normal text-xl px-5 text-center" data-aos="fade-up">
                    Make contactless payments on the go by connecting mPOS to any smart phone <br />
                    via bluetooth, and accept payments via debit & credit cards.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-12" data-aos="fade-up">
                    <Link href="https://dotmik-software.readme.io/reference/authentication" className="flex items-center gap-2 banner-button">
                        Launch API
                    </Link>
                    <Link href="contactus" className="flex items-center gap-2 banner-button">
                        Let's Talk
                    </Link>
                </div>
                <div className="mt-24">
                      <Image
                            src={Images.posbanner} alt="support" className="object-cover object-center rounded-none w-full mx-auto lg:w-[25%] " />
                </div>
                  
            </div>
            <Effectivesolution />
            <Maximiseenhance />
            <Businesscategories />
            <Posapi />
            <Brandvouchers />
            <Faq />
            <Security />


        </>
    );
};

export default Pos;
