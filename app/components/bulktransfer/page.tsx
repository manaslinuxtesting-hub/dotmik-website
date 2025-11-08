
import Icons from "@/app/constants/Icons";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css'; 


const Bulktransfer = () => {
    return (
        <>
            <div className="h-banner   blog-banner">
                <div className=" flex relative lg:py-40 py-20  w-full h-full mx-auto lg:gap-24 items-end justify-between px-10 2xl:container">
                    <div className="lg:flex-1">

                    </div>
                    <div className="lg:flex-1">
                        <p className="text-white text-large-32 font-normal pb-2" data-aos="fade-up">DotMik’s End-to-End </p>
                        <h2 className=" pb-6 leading-none lg:text-medium-2xl !font-bold text-5xl text-white" data-aos="fade-up">Effortless Bulk Payout Process</h2>
                        <p className="text-small text-white" data-aos="fade-up">Go beyond basic bank transfers with features designed to boost your business. Get faster
                            payouts using popular payment methods & manage all your finances with our intuitive dashboard.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
                            <div className="flex flex-col" data-aos="fade-up">
                                <Image
                                    src={Icons.notped}
                                    alt="support"
                                    width={50}
                                    height={50}
                                    className="bg-[#fff] p-2.5 rounded-full mb-6"
                                />
                                <h4 className="text-tiny-2xl  font-semibold leading-none text-white">All Modes Supported</h4>
                                <p className="text-xextra-small font-normal  text-white pt-2">Choose from a variety of payment modes including IMPS, NEFT, RTGS, UPI, and Wallets.</p>
                            </div>
                            <div className="flex flex-col" data-aos="fade-up">
                                <Image
                                    src={Icons.notped}
                                    alt="support"
                                    width={50}
                                    height={50}
                                    className="bg-[#fff] p-2.5 rounded-full mb-6"
                                />
                                <h4 className="text-tiny-2xl  font-semibold leading-none text-white">Bulk Transfers in One Go</h4>
                                <p className="text-xextra-small font-normal pt-2 text-white">Use bulk payouts to process thousands of transfers file upload. </p>
                            </div>
                            <div className="flex flex-col mt-8" data-aos="fade-up">
                                <Image
                                    src={Icons.notped}
                                    alt="support"
                                    width={50}
                                    height={50}
                                    className="bg-[#fff] p-2.5 rounded-full mb-6"
                                />
                                <h4 className=" text-tiny-2xl  font-semibold leading-none text-white">Track & Reconcile Payments</h4>
                                <p className="text-xextra-small font-normal pt-2 text-white">Smart financial reporting lets you find and match any transaction.</p>
                            </div>
                            <div className="flex flex-col mt-8" data-aos="fade-up">
                                <Image
                                    src={Icons.notped}
                                    alt="support"
                                    width={50}
                                    height={50}
                                    className="bg-[#fff] p-2.5 rounded-full mb-6"
                                />
                                <h4 className="text-tiny-2xl  font-semibold leading-none text-white">Get Real-time Insights</h4>
                                <p className="text-xextra-small font-normal pt-2 text-white">Transactional insights for better cash flow & business decisions.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Bulktransfer;
