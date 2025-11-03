import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css'; 

const Logicwhychoose = () => {
    return (
        <div className=" lg:px-20 px-10 lg:py-40 py-20">
            <div className="flex w-full relative flex-col gap-3 h-full flex-wrap mx-auto md:max-w-[1350px]">

                <h2 className="leading-none  text-small !font-semibold" data-aos="fade-up">Why are we your best partner for success?</h2>
                <p className="text-large-36 text-black pb-2 font-semibold " data-aos="fade-up">Fast and secure <span className="text-[#fc9d08]">
                     logistics </span> payment solutions</p>
                {/* Scrollable Content */}
                <div className=" overflow-visible pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        {/* Card 1 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-xl text-white leading-none font-bold">Ensure genuine sellers</h4>
                                <p className="text-small text-white">
                                   Register sellers through a robust identity verification system.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-xl  text-white leading-none font-bold">Merchant payout management</h4>
                                <p className="text-small text-white">
                                   Optimize bulk e-commerce payouts with secure, instant transfers.

                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-xl text-white leading-none font-bold">Automate customer payments.</h4>
                                <p className="text-small text-white">
                                    Receive payments anytime, anywhere with a reliable payment gateway.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-xl text-white leading-none font-bold">Process refunds instantly with no delays.</h4>
                                <p className="text-small text-white">
                                   Optimize your refund process to credit original payment methods instantly.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-xl text-white leading-none font-bold">Secure payroll</h4>
                                <p className="text-small text-white">
                                    Real-time salary processing to streamline business payrolls.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-xl text-white leading-none font-bold">Real-time fraud monitoring</h4>
                                <p className="text-small text-white">
                                   Protect your business from fraud while staying compliant with KYC, AML, and other financial mandates using our secure API system

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logicwhychoose;
