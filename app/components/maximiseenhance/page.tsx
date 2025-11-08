import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css'; 

const Maximiseenhance = () => {
    return (
        <div className=" lg:px-20 px-10 lg:py-40 pt-20  h-banner  blog-banner">
            <div className="flex w-full relative gap-20 h-full flex-wrap mx-auto md:max-w-[1350px]">
                {/* Sticky Sidebar */}
                <div className="flex flex-col w-full">
                    <h2 className="pb-14 leading-[1.2] text-medium-50 !font-bold text-5xl text-white " data-aos="fade-up">
                        Maximise <span className="text-[#fc9d08]">  Sales. </span> Enhance   <span className="text-[#fc9d08]"> Insights.</span> <br />
                         Expedite  <span className="text-[#fc9d08]"> Reconciliation.</span>  Foster <span className="text-[#fc9d08]"> Loyalty.</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3   ">
                        <div className="flex flex-col flex-1 p-8" data-aos="fade-up">
                            <h4 className="text-1x8 font-bold text-white pb-2">
                                Swift Onboarding
                            </h4>
                            <p className="text-1x8 font-normal text-white">Onboard swiftly, and get started with hassle-free bill payments.</p>
                        </div>
                        <div className="flex flex-col flex-1  p-8" data-aos="fade-up">
                           <h4 className="text-1x8 font-bold text-white pb-2">
                                Pay Bills 24/7
                            </h4>
                            <p className="text-1x8 font-normal text-white">Pay anytime, anywhere & never miss any due dates anymore!</p>
                        </div>
                        <div className="flex flex-col flex-1  p-8" data-aos="fade-up">
                            <h4 className="text-1x8 font-bold text-white pb-2">
                                Multiple Bill Payments
                            </h4>
                            <p className="text-1x8 font-normal text-white">Set multiple bill on auto-pay to avoid late fees and uninterrupted services.</p>
                        </div>
                        <div className="flex flex-col flex-1 p-8 " data-aos="fade-up">
                            <h4 className="text-1x8 font-bold text-white pb-2">
                                Pay Credit Card Bills
                            </h4>
                            <p className="text-1x8 font-normal text-white">Settle your credit card dues & ensure your monthly repayments are on time.</p>
                        </div>
                        <div className="flex flex-col flex-1  p-8" data-aos="fade-up">
                            <h4 className="text-1x8 font-bold text-white pb-2">
                                Consolidated View
                            </h4>
                            <p className="text-1x8 font-normal text-white">Access a detailed history of all your bill payments for better financial tracking.</p>
                        </div>
                        <div className="flex flex-col flex-1 p-8  " data-aos="fade-up">
                            <h4 className="text-1x8 font-bold text-white pb-2">
                                Alerts & Notifications
                            </h4>
                            <p className="text-1x8 font-normal text-white">Get Notifications & alerts via mail for bill dues and bill paid for smooth bill processing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Maximiseenhance;
