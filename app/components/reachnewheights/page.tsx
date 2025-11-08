import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';

const Reachnewheights = () => {
    return (
        <div className=" lg:px-20 px-10 lg:py-40 py-20">
            <div className="flex w-full relative gap-14 h-full flex-wrap mx-auto md:max-w-[1350px]">

                <h2 className="pb-0 leading-[1.2] lg:text-medium-48 !font-semibold text-5xl text-black" data-aos="fade-up">Reach new heights <br /> with <span className="text-[#fc9d08]"> UPI QR Codes </span></h2>

                {/* Scrollable Content */}
                <div className=" overflow-visible">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

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
                                <h4 className="mb-2 text-tiny-2xl !font-bold text-white leading-none">Compatible with All UPI Apps</h4>
                                <p className="text-small font-normal text-white">
                                    Our QR codes support all major UPI apps, providing maximum flexibility for customers.
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
                                <h4 className="mb-2 text-tiny-2xl !font-bold text-white leading-none">Enhanced Security </h4>
                                <p className="text-small font-normal text-white">
                                    Allow for secure payments by using QR codes based on NPCI's UPI infrastructure.
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
                                <h4 className="mb-2 text-tiny-2xl !font-bold text-white leading-none">Transaction Updates</h4>
                                <p className="text-small font-normal text-white">
                                    Easily track and monitor all your business transactions on Dashboard or via API.
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
                                <h4 className="mb-2 text-tiny-2xl !font-bold text-white leading-none">Regulatory Compliance</h4>
                                <p className="text-small font-normal text-white">
                                    Comply diligently with government-mandated standards, regulations, and guidelines.
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
                                <h4 className="mb-2 text-tiny-2xl !font-bold text-white leading-none">Better Customer Experience </h4>
                                <p className="text-small font-normal  text-white">
                                    Eliminate the need for cash transactions, making payments more convenient & efficient.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-black rounded-[20px] p-4 justify-between" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#fff] p-2.5 rounded-full "
                            />
                            <div className="flex-col">
                                <h4 className="mb-2 text-tiny-2xl !font-bold text-white leading-none">Reduced Costs on Transaction</h4>
                                <p className="text-small font-normal text-white">
                                    Save money on transaction fees associated with card payments. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reachnewheights;
