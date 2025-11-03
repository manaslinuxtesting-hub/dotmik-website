import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';

const Unifiedbanking = () => {
    return (
        <div className="h-banner blog-banner lg:px-20 px-10 lg:py-40 py-20 lg:!pb-40">
            <div className="flex w-full relative flex-col gap-3 h-full flex-wrap mx-auto md:max-w-[1350px]">
                <h2 className="text-medium-50 text-white pb-2 !font-bold leading-[1.2]" data-aos="fade-up">One app for all banking and<br />  payment needs.</h2>
                {/* Scrollable Content */}
                <div className=" overflow-visible pt-8">
                    <div className="flex flex-wrap ">

                        {/* Card 1 */}
                        <div className="flex flex-col gap-2  p-6 justify-between md:w-[33%] w-full border-r border-t border-b border-white" data-aos="fade-up">
                            <Image
                                src={Icons.connectedbank}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-white p-2 rounded mb-8" />
                            <div className="flex-col">
                                <h4 className="mb-2 text-large-24 font-medium text-white leading-none ">Connected Banking</h4>
                                <p className="text-small font-normal text-white">
                                    Real-time account monitoring to optimize your business finances.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col gap-2  p-6 justify-between md:w-[33%] w-full border-r  border-t border-b border-white" data-aos="fade-up">
                            <Image
                                src={Icons.smartreport}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-white p-2 rounded mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2  text-large-24 font-medium   text-white leading-none ">Smart Reporting</h4>
                                <p className="text-small font-normal  text-white">
                                    Track payments, revenues, and cash flow with interactive reports and actionable insights.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col gap-2 p-6 justify-between md:w-[33%] w-full  border-b  border-t border-white" data-aos="fade-up">
                            <Image
                                src={Icons.automateupi}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-white p-1 rounded mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2  text-large-24 font-medium  text-white leading-none ">Automate with APIs</h4>
                                <p className="text-small font-normal text-white">
                                    Leverage our robust set of APIs and SDKs to automate and customise your financial workflows.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col gap-2   p-6 justify-between md:w-[50%] w-full border-b border-r  border-white" data-aos="fade-up">
                            <Image
                                src={Icons.accesscapital}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-white p-2 rounded mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2  text-large-24 font-medium  text-white leading-none ">Access to Capital</h4>
                                <p className="text-small font-normal text-white">
                                    Get easy, collateral-free working capital loans to reach your business goals effectively.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2   p-6 justify-between md:w-[49%] w-full border-b  border-white" data-aos="fade-up">
                            <Image
                                src={Icons.accessbility}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-white p-2 rounded mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2  text-large-24 font-medium  text-white leading-none ">24*7 Assistance </h4>
                                <p className="text-small font-normal text-white">
                                    Our dedicated support team has your back 24*7 to optimise your financial processes.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Unifiedbanking;
