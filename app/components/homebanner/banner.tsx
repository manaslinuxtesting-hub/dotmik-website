"use client";

import Link from "next/link";
import 'aos/dist/aos.css'; 

const Homebanner = () => {
    return (
        <section className="relative w-full h-screen bg-black h-banner home-banner">
            <div className="flex flex-col items-center justify-center w-full h-full mx-auto text-center 2xl:container">

                {/* Top Line */}
                <div className="w-full lines">
                    <div className="animatedLine"></div>
                    <p className="text-white tracking-widest uppercase lg:text-small md:text-small text-extra-small" data-aos="fade-up">
                        Core Business Banking
                    </p>
                </div>

                {/* Main Heading */}
                <h1 className="pt-10 lg:pb-8 pb-0 leading-none text-white lg:text-large-7xl md:text-5lg text-tiny-2xl" data-aos="fade-up">
                    We Provide India&apos;s best <br />
                    <div className="scrolling-words-container">
                        <div className="scrolling-words-box">
                            <ul>
                                <li>App Development</li>
                                <li>Software Development</li>
                                <li>API Provider</li>
                                <li>Website Development</li>
                                <li>Digital Marketing</li>
                                {/* duplicate list to remove jerk */}
                                <li>App Development</li>
                                <li>Software Development</li>
                                <li>API Provider</li>
                                <li>Website Development</li>
                                <li>Digital Marketing</li>
                            </ul>
                        </div>
                    </div>

                </h1>

                {/* Sub Text */}
                <p className="text-white text-small  px-5" data-aos="fade-up">
                    Empower your enterprise with DotMik's cutting-edge API solutions,driving digital 
                      business growth <br /> as India's top API provider for scalable  fintech,  software, and app development integrations.
                </p>

                {/* CTA Buttons */}
                <div className="flex justify-center gap-3 mt-12" data-aos="fade-up">
                    <Link href="/" className="flex items-center gap-2 banner-button">
                       Launch API
                    </Link>
                    <Link href="/" className="flex items-center gap-2 banner-button">
                        Let's Talk
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Homebanner;
