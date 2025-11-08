
import Icons from "@/app/constants/Icons";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';


const Payoutsbreeze = () => {
    return (
        <>
            <div className="flex relative md:px-20 lg:py-40 py-20 w-full h-full mx-auto lg:gap-24 items-end justify-between px-10 md:px-0 md:max-w-[1350px]">
                <div className="lg:flex-1 ">
                    <h2 className=" pb-8  leading-[1.2] lg:text-medium-2xl !font-bold text-5xl" data-aos="fade-up">Make Payouts a Breeze for Your Business</h2>
                    <p className="text-small " data-aos="fade-up">Optimise your business payouts with payout links sent via SMS or email or messages, simplifying transaction processing with a few clicks</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
                        <div className="flex flex-col" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#0000002e] p-2.5 rounded-full mb-6"
                            />
                            <h4 className=" text-tiny-2xl font-bold leading-none">Fast, 24/7 Payouts</h4>
                            <p className="text-xextra-small font-normal  pt-2">Payouts can be instantly sent to any bank account, UPI ID, card, or wallet at any time.</p>
                        </div>
                        <div className="flex flex-col" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#0000002e] p-2.5 rounded-full mb-6"
                            />
                            <h4 className="text-tiny-2xl font-bold leading-none">Higher Transfer Success</h4>
                            <p className="text-xextra-small font-normal  pt-2">Ensure safe and reliable payouts through automatic retrying of transactions. </p>
                        </div>
                        <div className="flex flex-col mt-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#0000002e] p-2.5 rounded-full mb-6"
                            />
                            <h4 className=" text-tiny-2xl font-bold leading-none">Customised Experience</h4>
                            <p className="text-xextra-small font-normal  pt-2">Incorporate your business logo, colours, and style into Payment Links for a distinctive brand representation</p>
                        </div>
                        <div className="flex flex-col mt-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#0000002e] p-2.5 rounded-full mb-6"
                            />
                            <h4 className=" text-tiny-2xl font-bold leading-none">Bulk Payout Links</h4>
                            <p className="text-xextra-small font-normal  pt-2">Make hundreds of transfers at once and save time & effort with bulk Payout Links.</p>
                        </div>

                    </div>
                </div>
                <div className="lg:flex-1" data-aos="fade-up">

                </div>
            </div>

        </>
    );
};

export default Payoutsbreeze;
