import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';

const Whyeducation = () => {
    return (
        <div className=" lg:px-20 px-10 lg:py-40 py-20">
            <div className="flex w-full relative flex-col gap-3 h-full flex-wrap mx-auto md:max-w-[1350px]">

                <h2 className="leading-none  text-small !font-semibold" data-aos="fade-up">Why are we your best partner for success?</h2>
                <p className="text-large-36 text-black pb-2 font-semibold" data-aos="fade-up">
                    Streamlining <span className="text-[#fc9d08]">Educational   </span> Operations</p>
                {/* Scrollable Content */}
                <div className=" overflow-visible pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        {/* Card 1 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.educfees}
                                alt="support"
                                width={55   }
                                height={55}
                                className="p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2  text-tiny-2xl text-white leading-none font-bold">Fee Collection</h4>
                                <p className="text-xextra-small font-normal text-white">
                                    Process student fees through multiple channels including UPI, QR codes, POS machines, and net banking with instant reconciliation.                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.vendereduc}
                                alt="support"
                                width={55}
                                height={55}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Vendor Payments</h4>
                                <p className="text-xextra-small font-normal text-white">
                                   Handle payments to educational suppliers, cafeteria vendors, and service providers with real-time settlement.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.saleruseicon}
                                alt="support"
                                width={60}
                                height={60}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Salary & Reimbursements</h4>
                                <p className="text-xextra-small font-normal text-white">
                                    Process faculty salaries, expense reimbursements, and other payments.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.campasuicon}
                                alt="support"
                                width={50}
                                height={50}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Campus Payments</h4>
                                <p className="text-xextra-small font-normal text-white">
                                  Integrated POS solutions for campus stores and cafeteria payment systems.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 " data-aos="fade-up">
                            <Image
                                src={Icons.studentwallet}
                                alt="support"
                                width={50}
                                height={50}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Student Wallet</h4>
                                <p className="text-xextra-small font-normal text-white">
                                    Enable easy and secure payments for students to manage their daily expenses smoothly.
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
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Student Wallet</h4>
                                <p className="text-xextra-small font-normal text-white">
                                    Enable easy and secure payments for students to manage their daily expenses smoothly.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whyeducation;
