import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css'; 

const Cardsuniquely = () => {
    return (
        <div className=" lg:px-20 px-10 lg:py-40 py-20">
            <div className="flex w-full relative gap-20 h-full flex-wrap mx-auto md:max-w-[1350px]">

                {/* Sticky Sidebar */}
                <div className="flex flex-col w-full">
                    <h2 className="pb-6 leading-[1.2] text-medium-48 !font-bold text-black" data-aos="fade-up">
                        Cards Uniquely Built <br /> for your Business.
                    </h2>
                    <p className="text-small text-black pb-14" data-aos="fade-up">
                        Designed to optimise your operations, solidify corporate structure, and level <br /> up expense management for your business
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3  border border-black rounded-lg "  data-aos="fade-up">
                        <div className="flex flex-col flex-1 border-b border-black p-6" >
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                            />
                            <p className="text-xextra-small  text-black ">
                                Payroll Automation
                            </p> 
                        </div>
                        <div className="flex flex-col flex-1 border-b lg:border-r lg:border-l border-black p-6" >
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                            />
                            <p className="text-xextra-small text-black ">
                               Petty Cash
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 border-b border-black p-6">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                            />
                            <p className="text-xextra-small text-black ">
                                Rewards and Recognitions
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 p-8 border-b lg:border-b-0 border-black" >
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                            />
                            <p className="text-xextra-small text-black ">
                               Fleet Management
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 lg:border-r lg:border-l border-b  lg:border-b-0 border-black p-6" >
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                            />
                            <p className="text-xextra-small text-black">
                               Manage Employee Expenses
                            </p>
                        </div> 
                        <div className="flex flex-col flex-1 p-6" >
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-4"
                            />
                            <p className="text-xextra-small text-black ">
                               Easy Reimbursements
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Cardsuniquely;
