
"use client";

import Link from "next/link";
import Payoutstructure from "../components/payoutstructure/page";
import Numberstate from "../components/numberstate/page";
import Whydotmik from "../components/whydotmik/page";
import Digishop from "../components/digishop/page";
import Security from "../components/security/page";
import 'aos/dist/aos.css';
import Images from "@/app/constants/images";
import Image from "next/image";
const Bankingagent = () => {
    return (
        <>
            <div className="h-banner !h-full relative  ">
                <Image
                    src={Images.bankagentbanner} alt="support" className="object-cover object-center rounded-none w-full h-full" />
                <div className="absolute top-[130px] left-1/2 -translate-x-1/2">
                    <h1 className="pt-10 pb-8 leading-[1.2] text-white  text-center lg:text-medium-48 !font-bold text-5xl" data-aos="fade-up">
                        Connecting India with
                        <br /> <span className="text-[#fc9d08]"> The Largest Agent <br /> Banking Network</span>
                    </h1>
                    <p className="text-small font-normal px-5 text-center text-white" data-aos="fade-up">
                        If you are a talented and ambitious individual looking to make a <br /> mark in your career, we invite you to explore our career opportunities.
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
            </div>
            <Payoutstructure />
            <Numberstate />
            <Whydotmik />
            <Digishop />
            <Security />

        </>
    );
};

export default Bankingagent;
