import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';

const Whymarketplace = () => {
    return (
        <div className=" lg:px-20 px-10 lg:py-40 py-20">
            <div className="flex w-full relative flex-col gap-3 h-full flex-wrap mx-auto md:max-w-[1350px]">

                <h2 className="leading-none  text-small !font-semibold" data-aos="fade-up">Why are we your best partner for success?</h2>
                <p className="text-large-36 text-black pb-2 font-semibold" data-aos="fade-up">
                    Streamlining  <span className="text-[#fc9d08]">Marketplace  </span> Operations</p>
                {/* Scrollable Content */}
                <div className=" overflow-visible pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        {/* Card 1 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.smartseller}
                                alt="support"
                                width={50}
                                height={50}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2  text-tiny-2xl text-white leading-none font-bold">Smart Seller Onboarding</h4>
                                <p className="text-xextra-small font-normal text-white">
                                    Instant merchant activation with automated KYC, bank verification, and GST validation.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.vendoricon}
                                alt="support"
                                width={50}
                                height={50}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Vendor Payment Solutions</h4>
                                <p className="text-xextra-small font-normal text-white">
                                           Manage logistics and service provider payments with bulk processing support.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.automate}
                                alt="support"
                                width={50}
                                height={50}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Payment Acceptance Suite</h4>
                                <p className="text-xextra-small font-normal text-white">
                                    Process transactions via UPI, cards, net banking through payment gateway and POS solutions.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.refunds}
                                alt="support"
                                width={50}
                                height={50}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Refund Management</h4>
                                <p className="text-xextra-small font-normal text-white">
                                    Process instant refunds with automated workflows and real-time tracking.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 " data-aos="fade-up">
                            <Image
                                src={Icons.payroll}
                                alt="support"
                                width={50}
                                height={50}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Financial Tools</h4>
                                <p className="text-xextra-small font-normal text-white">
                                    Enable EMI, BNPL, and working capital solutions for marketplace growth.                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.monitoring}
                                alt="support"
                                width={50}
                                height={50}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Platform Integration</h4>
                                <p className="text-xextra-small font-normal text-white">
                                    Custom payment workflows with API banking and webhook notifications.                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whymarketplace;
