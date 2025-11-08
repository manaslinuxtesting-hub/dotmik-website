import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';


const Insurancecategories = () => {
    return (
        <div className="lg:px-20 px-10 lg:py-40 py-20 relative h-banner blog-banner">
            <div className="w-full gap-14 h-full mx-auto md:max-w-[1350px]">

                {/* Sticky Header */}
                <div className="mb-10 sticky top-0  z-20 py-5">
                    <p className="text-small font-medium pb-2 text-white" data-aos="fade-up">EXPLORE CATEGORIES</p>
                    <h2 className="leading-[1.2] text-medium-2xl font-semibold  text-white" data-aos="fade-up">
                        Business Insurance Built To Suit You
                    </h2>
                </div>

                {/* Stack Sticky Cards */}
                <div className="space-y-5">
                    <div className="sticky top-38 bg-[#1b1b1b] rounded-[10px] z-10" data-aos="fade-up">
                        <div className="flex flex-wrap items-center gap-16">
                            <div className="flex flex-col lg:flex-1 lg:p-16 lg:pr-0 p-10">
                                <p className="text-tiny-2xl font-semibold pb-6 text-white">Motor Insurance</p>
                                <h2 className="leading-[1.2]  text-medium-2xl font-medium  text-white ">
                                    Protects the fleet with coverage, ensuring safety from
                                    accidents, theft, and third-party damages while minimising
                                    downtime.
                                </h2>
                            </div>
                            <div className="relative lg:flex-1">
                                <Image
                                    src={Images.car}
                                    alt="support"
                                    quality={100}
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                    </div>



                    <div className="sticky top-38 bg-[#371c03] rounded-[10px] z-10" data-aos="fade-up">
                        <div className="flex flex-wrap items-center gap-16">
                            <div className="flex flex-col lg:flex-1 lg:p-16 lg:pr-0 p-10">
                                <p className="text-tiny-2xl font-semibold pb-6 text-white">Travel Insurance</p>
                                <h2 className="leading-[1.2]  text-medium-2xl font-medium   text-white">
                                    Ensure travelers' safety with coverage for emergencies, cancellations, and unexpected travel challenges.
                                </h2>
                            </div>
                            <div className="relative lg:flex-1">
                                <Image
                                    src={Images.travel}
                                    alt="support"
                                    quality={100}
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sticky top-38 bg-[#2e272a] rounded-[10px] z-10" data-aos="fade-up">
                        <div className="flex flex-wrap items-center gap-16">
                            <div className="flex flex-col  lg:flex-1 lg:p-16 lg:pr-0 p-10">
                                <p className="text-tiny-2xl font-semibold  pb-6 text-white">Property Insurance</p>
                                <h2 className="leading-[1.2]  text-medium-2xl font-medium  text-white">
                                    Ensure your business premises and assets are secure against fire, theft, and unpredictable disasters.
                                </h2>
                            </div>
                            <div className="relative lg:flex-1">
                                <Image
                                    src={Images.property}
                                    alt="support"
                                    quality={100}
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sticky top-38 bg-[#272c2a] rounded-[10px] z-10" data-aos="fade-up">
                        <div className="flex flex-wrap items-center gap-16">
                            <div className="flex flex-col lg:flex-1 lg:p-16 lg:pr-0 p-10">
                                <p className="text-tiny-2xl font-semibold  pb-6 text-white">Liability Insurance</p>
                                <h2 className="leading-[1.2]  text-medium-2xl font-medium  text-white
                                ">
                                    Shield executives from personal liabilities arising from critical business decisions and complex legal disputes.
                                </h2>
                            </div>
                            <div className="relative lg:flex-1">
                                <Image
                                    src={Images.lability}
                                    alt="support"
                                    quality={100}
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sticky top-38 bg-[#133955] rounded-[10px] z-10" data-aos="fade-up">
                        <div className="flex flex-wrap items-center gap-16">
                            <div className="flex flex-col lg:flex-1 lg:p-16 lg:pr-0 p-10">
                                <p className="text-tiny-2xl font-semibold  pb-6 text-white">Marine Insurance
                                </p>
                                <h2 className="leading-[1.2]  text-medium-2xl font-medium  text-white">
                                    Safeguard your goods in transit against damages & losses during shipping ensuring your business remains secure port to port.                                </h2>
                            </div>
                            <div className="relative lg:flex-1">
                                <Image
                                    src={Images.marine}
                                    alt="support"
                                    quality={100}
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sticky top-30 bg-[#111928] rounded-[10px] z-10" data-aos="fade-up">
                        <div className="flex flex-wrap items-center gap-16">
                            <div className="flex flex-col lg:flex-1 lg:p-16 lg:pr-0 p-10">
                                <p className="text-tiny-2xl font-semibold  pb-6 text-white">Cyber Insurance  </p>
                                <h2 className="leading-[1.2] text-medium-2xl font-medium text-white">
                                    Mitigate financial and reputational risks with protective coverage against data breaches and cyberattacks.                          </h2>
                            </div>
                            <div className="relative lg:flex-1">
                                <Image
                                    src={Images.cyber}
                                    alt="support"
                                    quality={100}
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insurancecategories;
