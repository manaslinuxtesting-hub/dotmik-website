import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css'; 

const Hiring = () => {
    return (
        <div className=" lg:px-20 px-10 lg:py-40 py-20  ">
            <div className="flex w-full relative gap-20 h-full flex-wrap mx-auto md:max-w-[1350px]">
                <div className="flex flex-col w-full">
                    <div className="bg-halfcercel-effect"></div>
                    <p className="text-small text-center pb-2 " data-aos="fade-up">Step into a rewarding career with our current job openings.

                    </p>
                    <h2 className="pb-14 leading-none text-medium-2xl font-bold text-center text-black " data-aos="fade-up">
                       Our company offers new roles for your professional growth.

                    </h2>

                    <div className="flex items-center flex-wrap gap-5 justify-center lg:justifey-between bg-[#ddd] rounded-lg p-8 mb-4" data-aos="fade-up">
                        <div className="flex flex-col lg:flex-1">
                            <h4 className="text-1x8  font-semibold pb-5">Sales Executive</h4>
                            <p>0-6 Months Exp.</p>
                        </div>
                        <div className="">
                            <Link href="/" className="flex items-center gap-2 banner-button">
                                Apply
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap gap-5 justify-center lg:justifey-between bg-[#ddd] rounded-lg p-8 mb-4" data-aos="fade-up">
                        <div className="flex flex-col lg:flex-1">
                            <h4 className="text-1x8  font-semibold pb-5">Graphic Designer</h4>
                            <p>Minimum 1+ years experience or above</p>
                        </div>
                        <div className="">
                            <Link href="/" className="flex items-center gap-2 banner-button">
                                Apply
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap gap-5 justify-center lg:justifey-between bg-[#ddd] rounded-lg p-8 mb-4" data-aos="fade-up">
                        <div className="flex flex-col lg:flex-1">
                            <h4 className="text-1x8  font-semibold pb-5">HR Executive</h4>
                            <p>Minimum 1+ year Exp. or above</p>
                        </div>
                        <div className="">
                            <Link href="/" className="flex items-center gap-2 banner-button">
                                Apply
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap gap-5 justify-center lg:justifey-between bg-[#ddd] rounded-lg p-8 mb-4" data-aos="fade-up">
                        <div className="flex flex-col lg:flex-1">
                            <h4 className="text-1x8  font-semibold pb-5">Laravel Developer</h4>
                            <p>Minimum 2+ year Exp.</p>
                        </div>
                        <div className="">
                            <Link href="/" className="flex items-center gap-2 banner-button">
                                Apply
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap gap-5 justify-center lg:justifey-between bg-[#ddd] rounded-lg p-8 mb-4" data-aos="fade-up">
                        <div className="flex flex-col lg:flex-1">
                            <h4 className="text-1x8  font-semibold pb-5">SEO Executive</h4>
                            <p>Minimum 1+ year Exp. or above</p>
                        </div>
                        <div className="">
                            <Link href="/" className="flex items-center gap-2 banner-button">
                                Apply
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hiring;
