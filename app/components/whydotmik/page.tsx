import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';

const Whydotmik = () => {
    return (
        <div className=" bg-[#f5f6fa]">
            <div className="flex relative gap-20 lg:py-40  py-20 flex-wrap  w-full h-full mx-auto   md:max-w-[1350px]">
                <div className="flex flex-wrap justify-between w-full gap-10">
                    <div className="lg:flex-1 justify-between  flex-col flex px-4" >
                        <h2 className="pb-4 leading-[1.2] text-medium-48 !font-bold  text-black " data-aos="fade-up">
                            Why <br />
                            Dotmik..?
                        </h2>
                        <Image
                            src={Images.building} alt="support" data-aos="fade-up" />
                    </div>
                    <div className="lg:flex-1 px-4">
                        <div className="flex-col bg-[#fff] p-6 rounded-md mb-5 border border-[#e9e9e9] shadow-[0_3px_33px_2px_#ddd]" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={60}
                                height={60}
                                className="pb-6"
                            />
                            <h4 className="mb-2 text-tiny-2xl font-medium leading-none"> Easy Onboarding</h4>
                            <p className="text-small font-normal">Get started with Instantpay's quick registration process and user-friendly interface for
                                a faster account setup, allowing you to deliver valuable services to your customers with ease
                            </p>
                        </div>
                        <div className="flex-col bg-[#fff] p-6 rounded-md mb-5 border border-[#e9e9e9] shadow-[0_3px_33px_2px_#ddd]" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={60}
                                height={60}
                                className="pb-6"
                            />
                            <h4 className="mb-2 text-tiny-2xl font-medium  leading-none">Increase Footfall</h4>
                            <p className="text-small font-normal">Expand your reach by offering in-demand services at a Digi Kendra,
                                attracting more customers to your store and boosting footfall and sales
                            </p>
                        </div>
                        <div className="flex-col bg-[#fff] p-6 rounded-md mb-5 border border-[#e9e9e9] shadow-[0_3px_33px_2px_#ddd]" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={60}
                                height={60}
                                className="pb-6"
                            />
                            <h4 className="mb-2 text-tiny-2xl font-medium  leading-none"> Earn on Every Transaction</h4>
                            <p className="text-small font-normal">Gain commission on every service you provide, enhancing your
                                income with each customer transaction, and maximize your profits by expanding your services with Instantpay
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whydotmik;
