import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';

const Needgiftcards = () => {
    return (
        <div className="h-banner blog-banner lg:px-20 px-10 lg:py-40 py-20">
            <div className="flex w-full relative gap-20 h-full flex-wrap mx-auto md:max-w-[1350px]">

                <h2 className="pb-6 leading-none text-large-36  font-semibold text-white" data-aos="fade-up">Why Businesses Need Dotmik Gift Cards?</h2>

                {/* Scrollable Content */}
                <div className=" overflow-visible">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* Card 1 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-1x8 font-semibold text-white leading-none">Virtual / Physical Card Issuance</h4>
                                <p className="text-small font-normal text-white">
                                    Offer virtual cards for online transactions, providing added security and flexibility for remote or digital purchases.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-1x8 font-semibold text-white leading-none">Instant Access To Funds </h4>
                                <p className="text-small font-normal text-white">
                                    Manage your personal finances & control spending more effectively, with clearer access to your expenses.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-1x8 font-semibold text-white leading-none">Manage & Protect Card Access</h4>
                                <p className="text-small font-normal text-white">
                                    Manage all your Expense cards from one single dashboard for easy expense tracking & security.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-1x8 font-semibold text-white leading-none">Tap and Pay</h4>
                                <p className="text-small font-normal text-white">
                                    Enable quick and contactless transactions at merchant stores, enhancing convenience and speed at checkout.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-1x8 font-semibold text-white leading-none">Accepted across India </h4>
                                <p className="text-small font-normal text-white">
                                    Use the card at any RuPay accepting merchant, expanding payment options for seamless transactions.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-1x8 font-semibold text-white leading-none">Set Spending Limits</h4>
                                <p className="text-small font-normal text-white">
                                    Manage your personal finances & control spending more effectively, with clearer access to your expenses.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-1x8 font-semibold text-white leading-none">Receive SMS/Email Updates</h4>
                                <p className="text-small font-normal text-white">
                                    Get instant notifications on transaction activity via SMS and Email.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-1x8 font-semibold text-white leading-none">Transactions History</h4>
                                <p className="text-small font-normal text-white">
                                    Mobile or Web App helps you in money management through transaction history.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-1x8 font-semibold text-white leading-none">Track Corporate Expense</h4>
                                <p className="text-small font-normal text-white">
                                    Issuers can track expenses in real-time for clearer visibility.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full mb-8"
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-1x8 font-semibold text-white leading-none">Access Detailed Expense Reports</h4>
                                <p className="text-small  font-normal text-white">
                                    Get analytical insights into spending patterns and optimise budget allocation accordingly for your team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Needgiftcards;
