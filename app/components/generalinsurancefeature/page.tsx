import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css'; 

const Generalinsurancefeature = () => {
    return (
        <div className=" lg:px-20 px-10 lg:py-40 py-20">
            <div className="flex w-full relative gap-14 h-full flex-wrap mx-auto md:max-w-[1350px]">

                <h2 className="pb-0 leading-none text-1x8 !font-bold text-black" data-aos="fade-up">TOP FEATURES</h2>

                {/* Scrollable Content */}
                <div className=" overflow-visible">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        {/* Card 1 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-8 justify-between" data-aos="fade-up">
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl font-medium text-white leading-none">IRDAI Certified</h4>
                                <p className="text-small font-normal text-white">
                                    Compliant insurance solutions, approved by India’s regulatory authority.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-8 justify-between" data-aos="fade-up">
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl font-medium  text-white leading-none">Multiple Insurers</h4>
                                <p className="text-small font-normal text-white">
                                    Flexible options from leading insurance providers for your organisational needs.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-8 justify-between" data-aos="fade-up">
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl font-medium text-white leading-none">Low Premium</h4>
                                <p className="text-small font-normal text-white">
                                    Affordable insurance with low premiums, offering complete coverage.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-8 justify-between" data-aos="fade-up">
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl font-medium text-white leading-none">Instant Policy Issuance</h4>
                                <p className="text-small font-normal text-white">
                                    Get insurance policies issued instantly with minimal paperwork.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-8 justify-between" data-aos="fade-up">
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl font-medium text-white leading-none">Claim Assistance</h4>
                                <p className="text-small font-normal text-white">
                                    Reliable claim processing to minimise downtime and maximise convenience.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-8 justify-between" data-aos="fade-up">
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl font-medium text-white leading-none">24/7 Support</h4>
                                <p className="text-small font-normal text-white">
                                    Dedicated claim assistance to ensure a stress-free settlement process. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Generalinsurancefeature;
