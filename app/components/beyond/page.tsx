import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css'; 

const    Beyond = () => {
    return (
        <div className="h-banner blog-banner lg:px-20 px-10 lg:py-20">
            <div className="flex w-full relative gap-20 h-full flex-wrap mx-auto md:max-w-[1350px]">
                 <div className="bg-cercel-effect"></div>
                {/* Sticky Sidebar */}
                <div className="flex flex-col lg:w-[30%] lg:sticky top-[10px] self-start">
                    <h2 className="pb-6 leading-none text-medium-48 !font-bold text-white" data-aos="fade-up">
                        Banking & Beyond
                    </h2>
                    <p className="text-small  text-white pb-20" data-aos="fade-up">
                        Meticulously crafted to streamline operations, foster strategic
                        partnerships, and elevate your corporate presence.
                    </p>
                    <Link  href="/" className="flex items-center gap-2 banner-button w-max" data-aos="fade-up">
                        Get Started
                    </Link>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-visible">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* Card 1 */}
                        <div className="flex flex-col gap-2 bg-white rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.partnerewards}
                                alt="support"
                                width={50}
                                height={50}
                                className=" p-2  mb-8"/>
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl font-semibold  ">Partner Rewards</h4>
                                <p className="text-xextra-small">
                                    Leverage partner rewards with exclusive benefits & discounts.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col gap-2 bg-white rounded-[20px] p-4 " data-aos="fade-up">
                            <Image
                                src={Icons.expensses}
                                alt="support"
                                width={50}
                                height={50}
                                className=" mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2  text-tiny-2xl font-semibold">Expense Management</h4>
                                <p className="text-xextra-small">
                                     Track, control, & manage your business expenses. 
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col gap-2 bg-white rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.workingcapital}
                                alt="support"
                                width={50}
                                height={50}
                                className="p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2   text-tiny-2xl font-semibold">Working Capital</h4>
                                <p className="text-xextra-small">
                                    Access flexible funding options tailored to your business needs. 
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col gap-2 bg-white rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.coprativegifet}
                                alt="support"
                                width={50}
                                height={50}
                                className="p-1  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2  text-tiny-2xl font-semibold">Corporate Gifting Solutions</h4>
                                <p className="text-xextra-small">
                                     Explore a full spectrum of gift cards to meet all corporate gifting needs. 
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-white rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.brandvocher}
                                alt="support"
                                width={50}
                                height={50}
                                className="p-1 mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2   text-tiny-2xl font-semibold">Personalised Brand Vouchers</h4>
                                <p className="text-xextra-small">
                                     Engage, reward & customise Brand vouchers. 
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-white rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.secureidentity}
                                alt="support"
                                width={50}
                                height={50}
                                className="p-1  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2   text-tiny-2xl font-semibold">Secure Identity Verification</h4>
                                <p className="text-xextra-small">
                                    Verify IDs securely with advanced API. 
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-white rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.apiicon}
                                alt="support"
                                width={50}
                                height={50}
                                className="p-1  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2   text-tiny-2xl font-semibold">API</h4>
                                <p className="text-xextra-small">
                                    Integrate our APIs into your systems & platforms, ensuring smooth implementation process. 
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-white rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.billpay}
                                alt="support"
                                width={50}
                                height={50}
                                className="p-2  mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2   text-tiny-2xl font-semibold">Simplify Bill Payments</h4>
                                <p className="text-xextra-small">
                                     Easy bill payments for utilities, recharges credit cards, & more. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Beyond;
