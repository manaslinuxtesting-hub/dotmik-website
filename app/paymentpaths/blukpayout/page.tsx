"use client";

import Faq from "../components/faq/page";
import Link from "next/link";
import Security from "../components/security/page";
import Bulktransfer from "../components/bulktransfer/page";
import Payright from "../components/payright/page";
import Payoutsforbusiness from "../components/payoutsforbusiness/page";
import Blukbanktransferalternative from "../components/blukbanktransferalternative/page";
import 'aos/dist/aos.css';
import Images from "@/app/constants/images";
import Image from "next/image";
const Blukpayout = () => {
    return (
        <>
            <div className="h-banner lg:py-40 py-20 !pb-0 lg:px-20 px-10 blog-banner ">
                <h1 className="pt-10 pb-8 leading-[1.2] text-white text-center lg:text-medium-54 !font-bold text-5xl" data-aos="fade-up">
                    Smooth Payout Solutions <br /> for Businesses

                </h1>
                <p className="text-white lg:text-1x8  font-normal text-xl px-5 text-center" data-aos="fade-up">
                    Make payouts fast, flexible, and frictionless for your business. Pay suppliers, <br /> disburse employee salaries, and process customer refunds within seconds.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-12" data-aos="fade-up">
                    <Link href="https://dotmik-software.readme.io/reference/authentication" className="flex items-center gap-2 banner-button">
                        Launch API
                    </Link>
                    <Link href="contactus" className="flex items-center gap-2 banner-button">
                        Let's Talk
                    </Link>
                </div>
                <Image
                    src={Images.blukpayout} alt="support" className="object-cover object-center mx-auto rounded-none md:w-[30%] " />
            </div>
            <Blukbanktransferalternative />
            <Bulktransfer />
            <Payright />
            <Payoutsforbusiness />
            <Faq />
            <Security />


        </>
    );
};

export default Blukpayout;
