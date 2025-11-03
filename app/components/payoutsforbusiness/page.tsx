import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css'; 

const Payoutsforbusiness = () => {
    return (
        <div className=" lg:px-20 px-10 lg:py-40 pb-20 lg:pb-40">
            <div className="flex w-full relative gap-20 h-full flex-wrap mx-auto md:max-w-[1350px]">
                {/* Sticky Sidebar */}
                <div className="flex flex-col w-full">
                    <h2 className="pb-6 leading-none lg:text-medium-50 !font-bold text-5xl text-black" data-aos="fade-up">
                        Payouts for <br />
                        <span className="text-[#fc9d08]">
                         Every Business</span>
                    </h2>
                    <p className="text-small text-black pb-20" data-aos="fade-up">
                        Optimise your finances and increase automation. 
                        Our solution empowers businesses  <br />seeking faster payouts, maximising your control over your cash flow.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4  border border-black rounded-lg ">
                        <div className="flex flex-col flex-1 border-b border-black p-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                            />
                            <p className="text-1x8 font-semibold text-black ">
                                Vendor Payments
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 border-b lg:border-r lg:border-l border-black p-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                            />
                            <p className="text-1x8 font-semibold text-black ">
                              Payroll Disbursements
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 lg:border-r border-b border-black p-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                            />
                            <p className="text-1x8 font-semibold text-black ">
                               Customer Refunds
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 p-8 border-b" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                            />
                            <p className="text-1x8 font-semibold text-black ">
                               Seller Payments
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 lg:border-r  border-black p-8 border-b lg:border-b-0" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                            />
                            <p className="text-1x8 font-semibold text-black">
                               Gig Economy Payments
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 p-8  lg:border-r border-b lg:border-b-0" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                            />
                            <p className="text-1x8 font-semibold text-black ">
                               Employee Reimbursements
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 p-8  lg:border-r border-b lg:border-b-0" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                            />
                            <p className="text-1x8 font-semibold text-black ">
                              Claim Settlements
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 p-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                            />
                            <p className="text-1x8 font-semibold text-black ">
                               Volunteer Expenses
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Payoutsforbusiness;
