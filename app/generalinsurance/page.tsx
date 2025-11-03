"use client";

import Faq from "../components/faq/page";
import Link from "next/link";
import Security from "../components/security/page";
import Generalinsurancefeature from "../components/generalinsurancefeature/page";
import Insurancecategories from "../components/Insurancecategories/page";
import Insurancesolutions from "../components/insurancesolutions/page";
import 'aos/dist/aos.css'; 

const Generalinsurance = () => {
    return (
        <>
            <div className="h-banner py-40 lg:px-20 px-10 blog-banner ">
                <h1 className="pt-10 pb-8 leading-[1.2] text-white text-center lg:text-medium-54 !font-bold text-5xl" data-aos="fade-up">
                   Invest & Protect with Tailored <br /> Insurance Solutions
                </h1>
                <p className="text-white text-small px-5 text-center" data-aos="fade-up">
                    Accept payments instantly with UPI QR Codes. Generate unique <br /> QR codes for each store and simplify collections across your entire business.

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
            <Generalinsurancefeature />
            <Insurancecategories />
            <Insurancesolutions />
            <Faq />
            <Security />
        </>
    );
};

export default Generalinsurance;
