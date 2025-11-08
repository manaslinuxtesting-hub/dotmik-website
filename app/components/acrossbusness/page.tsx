import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css'; 

const Acrossbusness = () => {
    return (
        <div className=" lg:px-20 px-10 lg:py-40 py-20 ">
            <div className="flex w-full relative gap-20 h-full flex-wrap mx-auto md:max-w-[1350px]">
                {/* Sticky Sidebar */}
                <div className="flex flex-col w-full">
                    <h2 className="pb-14 leading-[1.2] text-5xl lg:text-medium-2xl !font-bold text-black " data-aos="fade-up">
                        Centralise  <span className="text-[#fc9d08]"> Utility Bill Payments </span><br /> Across your Business Operations
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3   ">
                        <div className="flex flex-col flex-1 p-8 px-0 lg:px-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <h4 className="text-1x8 font-semibold text-black pb-2">
                                Swift Onboarding
                            </h4>
                            <p className="text-small font-normal">Onboard swiftly, and get started with hassle-free bill payments.</p>
                        </div>
                        <div className="flex flex-col flex-1  p-8 px-0 lg:px-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                           <h4 className="text-1x8 font-semibold text-black pb-2">
                                Pay Bills 24/7
                            </h4>
                            <p className="text-small font-normal">Pay anytime, anywhere & never miss any due dates anymore!</p>
                        </div>
                        <div className="flex flex-col flex-1  p-8 px-0 lg:px-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <h4 className="text-1x8 font-semibold text-black pb-2">
                                Multiple Bill Payments
                            </h4>
                            <p className="text-small font-normal">Set multiple bill on auto-pay to avoid late fees and uninterrupted services.</p>
                        </div>
                        <div className="flex flex-col flex-1 p-8 px-0 lg:px-8 " data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <h4 className="text-1x8 font-semibold text-black pb-2">
                                Pay Credit Card Bills
                            </h4>
                            <p className="text-small font-normal">Settle your credit card dues & ensure your monthly repayments are on time.</p>
                        </div>
                        <div className="flex flex-col flex-1  p-8 px-0 lg:px-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <h4 className="text-1x8 font-semibold text-black pb-2">
                                Consolidated View
                            </h4>
                            <p className="text-small font-normal">Access a detailed history of all your bill payments for better financial tracking.</p>
                        </div>
                        <div className="flex flex-col flex-1 p-8  px-0 lg:px-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <h4 className="text-1x8 font-semibold text-black pb-2">
                                Alerts & Notifications
                            </h4>
                            <p className="text-small font-normal">Get Notifications & alerts via mail for bill dues and bill paid for smooth bill processing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Acrossbusness;
