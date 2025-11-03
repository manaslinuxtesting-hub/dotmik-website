"use client";

import Faq from "../components/faq/page";
import Link from "next/link";
import Security from "../components/security/page";
import Banktransferalternative from "../components/banktransferalternative/page";
import Bulktransfer from "../components/bulktransfer/page";
import Payright from "../components/payright/page";
import Payoutsforbusiness from "../components/payoutsforbusiness/page";
import 'aos/dist/aos.css'; 

const Singlepayouts = () => {
    return (
        <>
            <div className="h-banner lg:py-40 py-20 lg:px-20 px-10 blog-banner ">
                <h1 className="pt-10 pb-8 leading-none text-white text-center lg:text-medium-54 !font-bold text-5xl" data-aos="fade-up">
                    Simplifying Payouts <br /> for Businesses
                </h1>
                <p className="text-white lg:text-1x8 font-normal text-xl px-5 text-center" data-aos="fade-up">
                  Deliver fast, flexible, and smooth payouts for your business, processing <br /> supplier payments, salaries, and refunds in moments.
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
            <Banktransferalternative />
            <Bulktransfer />
            <Payright />
            <Payoutsforbusiness />
            <Faq />
            <Security />


        </>
    );
};

export default Singlepayouts;
