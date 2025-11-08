import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';

const Payoutstructure = () => {
    return (
        <div className=" lg:px-20 px-10 lg:py-40 py-20 bg-[#f5f6fa] ">
            <div className="flex relative gap-20  flex-wrap  w-full h-full mx-auto  2xl:container">
                {/* Sticky Sidebar */}
                <div className="flex md:flex-wrap lg:flex-nowrap justify-between items-center  w-full">
                    <div className="flex flex-col lg:flex-1">
                        <h2 className="pb-4 leading-none lg:text-medium-48  !font-bold  text-5xl  text-black " data-aos="fade-up">
                            Competitive <span className="text-[#fc9d08]"> Payout <br />
                            Structure </span> in the Market 
                        </h2>
                        <p className="text-1x8 font-normal  pb-2" data-aos="fade-up">A perfect combination of physical presence and digital <br />
                            platform to support businesses across industries.
                        </p>
                        <div className="flex flex-wrap  gap-3 mt-12" data-aos="fade-up">
                            <Link href="https://dotmik-software.readme.io/reference/authentication" className="flex items-center gap-2  other-btn !text-white ">
                                Launch API
                            </Link>
                            <Link href="contactus" className="flex items-center gap-2  other-btn !text-white ">
                                Let's Talk
                            </Link>
                        </div>
                    </div>
                    <div className="relative lg:flex-1" data-aos="fade-up">
                        <Image
                            src={Images.banking} alt="support" quality={100}
                            className="w-full lg:w-[70%] ml-auto rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payoutstructure;
