"use client";

import Faq from "../components/faq/page";
import Link from "next/link";
import Security from "../components/security/page";
import Payoutsbreeze from "../components/payoutsbreeze/page";
import Usecase from "../components/usecase/page";
import 'aos/dist/aos.css'; 

const Payoutlink = () => {
    return (
        <>
            <div className="h-banner lg:py-40 py-20 lg:px-20 px-10 blog-banner ">
                <h1 className="pt-10 pb-8 leading-none text-white text-center lg:text-medium-54 !font-bold text-5xl" data-aos="fade-up">
                    Pay without Bank Details <br /> via Payout links
                </h1>
                <p className="text-white lg:text-1x8 font-normal text-xl px-5 text-center" data-aos="fade-up">
                   Make payments using beneficiary's phone number or email address with Instantpay's Payout Links, <br /> collecting bank account details to process payments for vendors or customers.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-12" data-aos="fade-up">
                    <Link href="https://dotmik-software.readme.io/reference/authentication" className="flex items-center gap-2 banner-button">
                        Launch API
                    </Link>
                    <Link href="contactus" className="flex items-center gap-2 banner-button">
                        Let's Talk
                    </Link>
                </div>
            </div>
            <Payoutsbreeze />
            <Usecase />
            <Faq />
            <Security />


        </>
    );
};

export default Payoutlink;
