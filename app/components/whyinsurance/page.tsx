import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';

const Whyinsurance = () => {
    return (
        <div className=" lg:px-20 px-10 lg:py-40 py-20">
            <div className="flex w-full relative flex-col gap-3 h-full flex-wrap mx-auto md:max-w-[1350px]">

                <h2 className="leading-none  text-small !font-semibold" data-aos="fade-up">Why are we your best partner for success?</h2>
                <p className="text-large-36 text-black pb-2 font-semibold" data-aos="fade-up">
                    Streamlining   <span className="text-[#fc9d08]"> Insurance </span> Operations</p>
                {/* Scrollable Content */}
                <div className=" overflow-visible pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        {/* Card 1 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.policeverfication}
                                alt="support"
                                width={60}
                                height={60}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2  text-tiny-2xl text-white leading-none font-bold">Policy Holder Verification</h4>
                                <p className="text-xextra-small font-normal text-white">
                                   Streamline Policy holder onboarding with automated verification, cutting down on manual processing.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.merchant}
                                alt="support"
                                width={70}
                                height={70}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Verify Vehicle</h4>
                                <p className="text-xextra-small font-normal text-white">
                                  Verify through RC verification to ensure the authenticity of the vehicle's registration details, owner information, and more.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.premiumveri}
                                alt="support"
                                width={45}
                                height={45}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Premium Collection</h4>
                                <p className="text-xextra-small font-normal text-white">
                                   Streamline premium collection through collection QR codes for in-person payments or send collection links for remote transactions.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.claimveri}
                                alt="support"
                                width={62}
                                height={62}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Claim Disbursements</h4>
                                <p className="text-xextra-small font-normal text-white">
                                    Automatically process claim payments ensuring timely payouts to policyholders via payout APIs and payout links.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 " data-aos="fade-up">
                            <Image
                                src={Icons.payroll}
                                alt="support"
                                width={60}
                                height={60}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Salary Disbursement</h4>
                                <p className="text-xextra-small font-normal text-white">
                                   Enhance your payroll operations with our instant disbursement solution, increasing efficiency and accuracy.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-6 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.monitoring}
                                alt="support"
                                width={55}
                                height={55}
                                className=" p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl text-white leading-none font-bold">Fraud Prevention</h4>
                                <p className="text-xextra-small font-normal text-white">
                                  Detect and prevent fraud effectively using our APIs, adhering to stringent KYC, AML, and regulatory standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whyinsurance;
