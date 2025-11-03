"use client";

import Faq from "../components/faq/page";
import Link from "next/link";
import Security from "../components/security/page";
import Giftautomatecard from "../components/giftautomatecard/page";
import Possibilities from "../components/possibilities/page";
import Needgiftcards from "../components/needgiftcards/page";
import Brandvouchers from "../components/brandvouchers/page";
import 'aos/dist/aos.css'; 

const Expensecard = () => {
    return (
        <>
            <div className="h-banner py-40 lg:px-20 px-10 blog-banner ">
                <h1 className="pt-10 pb-8 leading-none text-white text-center text-medium-54 !font-bold text-5xl" data-aos="fade-up">
                    Digitise & Enhance your <br />
                    Corporate Gifting
                </h1>
                <p className="text-white lg:text-1x8 font-normal text-xl px-5 text-center" data-aos="fade-up">
                    Redefine and optimise your corporate gifting programs via our gift card <br />
                    and brand voucher solutions and innovative technology.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-12" data-aos="fade-up">
                    <Link href="/" className="flex items-center gap-2 banner-button">
                        Launch API
                    </Link>
                    <Link href="/" className="flex items-center gap-2 banner-button">
                        Let's Talk
                    </Link>
                </div>
            </div>

            <Possibilities />
            <Needgiftcards />
            <Brandvouchers />
            <Giftautomatecard />
            <Faq />
            <Security />


        </>
    );
};

export default Expensecard;
