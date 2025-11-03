
import Icons from "@/app/constants/Icons";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';


const Banktransferalternative = () => {
    return (
        <>
            <div className="flex relative lg:py-40 py-20  w-full h-full mx-auto lg:gap-24 items-end justify-between px-10 2xl:container">
                <div className="lg:flex-1">
                    <p className="text-large-32  font-normal pb-2" data-aos="fade-up">DotMik’s End-to-End </p>
                    <h2 className=" pb-6 leading-none lg:text-medium-2xl !font-bold  text-5xl" data-aos="fade-up">Transfer Solution</h2>
                    <p className="text-small" data-aos="fade-up">
                        Surpass basic bank transfers with DotMik’s tools for faster payouts and seamless financial control via our dashboard.
                        </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
                        <div className="flex flex-col" data-aos="fade-up">
                            <Image
                                src={Icons.sallmodul}
                                alt="support"
                                width={50}
                                height={50}
                                className=" mb-6"
                            />
                            <h4 className=" text-tiny-2xl  font-semibold leading-none">All Modes Supported</h4>
                            <p className="text-xextra-small font-normal  pt-2">Choose from a variety of payment modes including IMPS, NEFT, RTGS, UPI, and Wallets.</p>
                        </div>
                        <div className="flex flex-col" data-aos="fade-up">
                            <Image
                                src={Icons.sbluktransfer}
                                alt="support"
                                width={50}
                                height={50}
                                className=" mb-6"
                            />
                            <h4 className="text-tiny-2xl  font-semibold leading-none">One-Click Bulk Payout</h4>
                            <p className="text-xextra-small font-normal  pt-2">Use bulk payouts to process thousands of transfers file upload. </p>
                        </div>
                        <div className="flex flex-col mt-8" data-aos="fade-up">
                            <Image
                                src={Icons.realtimes}
                                alt="support"
                                width={50}
                                height={50}
                                className=" mb-6"
                            />
                            <h4 className="text-tiny-2xl  font-semibold leading-none">Track & Reconcile Payments</h4>
                            <p className="text-xextra-small font-normal pt-2">Smart financial reporting lets you find and match any transaction.</p>
                        </div>
                        <div className="flex flex-col mt-8" data-aos="fade-up">
                            <Image
                                src={Icons.reconiltreas}
                                alt="support"
                                width={50}
                                height={50}
                                className=" mb-6"
                            />
                            <h4 className=" text-tiny-2xl  font-semibold leading-none">Get Real-time Insights</h4>
                            <p className="text-xextra-small font-normal pt-2">Transactional insights for better cash flow & business decisions.</p>
                        </div>

                    </div>
                </div>
                <div className="lg:flex-1" data-aos="fade-up">

                </div>
            </div>

        </>
    );
};

export default Banktransferalternative;
