"use client";

import Link from "next/link";
import Security from "../components/security/page";
import Whychooseus from "../components/whychooseus/page";
import Unifiedbanking from "../components/unifiedbanking/page";
import Apibanking from "../components/apibanking/page";
import Apineed from "../components/apineed/page";
import 'aos/dist/aos.css'; 

const Developerapi = () => {
    return (
        <>
            <div className="h-banner lg:py-40 py-20 lg:px-20 px-10 blog-banner ">
                <h1 className="pt-10 pb-8 leading-[1.2] text-white text-center lg:text-medium-54 !font-bold text-5xl" data-aos="fade-up">
                    Experience the New Age <br />
                    <span className="text-[#fc9d08]"> API Banking  </span>Platform
                </h1>
                <p className="text-white text-small font-normal px-5 text-center" data-aos="fade-up">
                    Integrate banking services into your app to build innovative digital products <br /> faster across industries.
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
            <Apibanking />
            <Apineed />
            <Unifiedbanking />
            <Security />
        </>
    );
};

export default Developerapi;
