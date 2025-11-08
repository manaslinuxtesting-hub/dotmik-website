import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';

const Usecase = () => {
    return (
        <div className=" lg:px-20 px-10 lg:py-40 py-20 h-banner blog-banner ">
            <div className="flex w-full relative gap-20 h-full flex-wrap mx-auto md:max-w-[1350px]">
                {/* Sticky Sidebar */}
                <div className="flex flex-col w-full">
                    <h2 className="pb-14 leading-[1.2] lg:text-medium-50 !font-bold text-white " data-aos="fade-up">
                        Use Case for <br /> <span className="text-[#fc9d08]">Every Industry</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4  border border-white rounded-lg ">
                        <div className="flex flex-col flex-1 border-b border-white p-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <p className="text-xextra-small font-medium text-white">
                                Vendor Payments
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 border-b border-r border-l border-white p-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8" />
                            <p className="text-xextra-small font-medium text-white ">
                                Payroll Disbursements
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 border-r border-b border-white p-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <p className="text-xextra-small font-medium text-white ">
                                Customer Refunds
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 p-8 border-b border-white" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <p className="text-xextra-small font-medium text-white ">
                                Seller Payments
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 lg:border-r  border-b lg:border-b-0 border-white p-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <p className="text-xextra-small font-medium text-white">
                                Gig Economy Payments
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 p-8  lg:border-r border-b lg:border-b-0 border-white" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <p className="text-xextra-small font-medium text-white ">
                                Employee Reimbursements
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 p-8  lg:border-r   border-b lg:border-b-0 border-white" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <p className="text-xextra-small font-medium text-white ">
                                Claim Settlements
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 p-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <p className="text-xextra-small font-medium text-white ">
                                Volunteer Expenses
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Usecase;
