"use client";

import Link from "next/link";
import Hiring from "../components/hiring/page";
import 'aos/dist/aos.css'; 

const Careers = () => {
    return (
        <>
            <div className="h-banner py-40 lg:px-20 px-10 blog-banner ">
                <h1 className="pt-10 pb-8 leading-none text-heading text-center  lg:text-5lg text-5xl !font-bold" data-aos="fade-up">
                    Step Into Your <br /> Career Journey

                </h1>
                <p className="text-white text-small px-5 text-center" data-aos="fade-up">
If you’re a dynamic and capable individual aiming to make <br /> a difference in your career, discover our employment opportunities.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-12" data-aos="fade-up">
                   
                    <Link href="contactus" className="flex items-center gap-2 banner-button">
                        Reach DotMik
                    </Link>
                </div>
            </div>
            <Hiring />
        </>
    );
};

export default Careers;
