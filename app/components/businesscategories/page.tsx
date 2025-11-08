import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css'; 

const Businesscategories = () => {
    return (
        <div className=" lg:px-20 px-10 lg:py-40 py-20  ">
            <div className="w-full relative gap-20 h-full flex-wrap mx-auto md:max-w-[1350px]">
                <p className="text-large-24 font-normal text-black  pb-2" data-aos="fade-up">Powering Payments Across
                </p>
                <h2 className="pb-10 leading-none text-5xl lg:text-medium-48 font-semibold text-black" data-aos="fade-up">Business Categories</h2>
                <div className="flex gap-5 flex-wrap">
                    <div className="flex flex-col p-5 bg-black rounded-lg flex-1" data-aos="fade-up">
                        <Image
                            src={Icons.notped}
                            alt="support"
                            width={50}
                            height={50}
                            className="bg-[#ddd] p-2.5 rounded-full mb-5"
                        />
                        <h4 className="text-tiny-2xl  font-medium text-white">Retail</h4>
                    </div>
                    <div className="flex flex-col p-5 bg-black rounded-lg  flex-1" data-aos="fade-up">
                        <Image
                            src={Icons.notped}
                            alt="support"
                            width={50}
                            height={50}
                            className="bg-[#ddd] p-2.5 rounded-full mb-5"
                        />
                        <h4 className="text-tiny-2xl  font-medium text-white">Hospitality</h4>
                    </div>
                    <div className="flex flex-col p-5 bg-black rounded-lg  flex-1" data-aos="fade-up">
                        <Image
                            src={Icons.notped}
                            alt="support"
                            width={50}
                            height={50}
                            className="bg-[#ddd] p-2.5 rounded-full mb-5"
                        />
                        <h4 className="text-tiny-2xl  font-medium text-white">Healthcare</h4>
                    </div>
                </div>
                <div className="flex gap-5 flex-wrap pt-5">
                    <div className="flex flex-col p-5 bg-black rounded-lg  flex-1" data-aos="fade-up">
                        <Image
                            src={Icons.notped}
                            alt="support"
                            width={50}
                            height={50}
                            className="bg-[#ddd] p-2.5 rounded-full mb-5"
                        />
                        <h4 className="text-tiny-2xl  font-medium text-white lg:whitespace-nowrap">Fitness & Wellness</h4>
                    </div>
                    <div className="flex flex-col p-5 bg-black rounded-lg  flex-1" data-aos="fade-up">
                        <Image
                            src={Icons.notped}
                            alt="support"
                            width={50}
                            height={50}
                            className="bg-[#ddd] p-2.5 rounded-full mb-5"
                        />
                        <h4 className="text-tiny-2xl  font-medium text-white">Transportation</h4>
                    </div>
                    <div className="flex flex-col p-5 bg-black rounded-lg  flex-1" data-aos="fade-up">
                        <Image
                            src={Icons.notped}
                            alt="support"
                            width={50}
                            height={50}
                            className="bg-[#ddd] p-2.5 rounded-full mb-5"
                        />
                        <h4 className="text-tiny-2xl  font-medium text-white">Entertainment</h4>
                    </div>
                </div>
                <div className="flex gap-5 flex-wrap pt-5">
                    <div className="flex flex-col p-5 bg-black rounded-lg  flex-1" data-aos="fade-up">
                        <Image
                            src={Icons.notped}
                            alt="support"
                            width={50}
                            height={50}
                            className="bg-[#ddd] p-2.5 rounded-full mb-5"
                        />
                        <h4 className="text-tiny-2xl  font-medium text-white">Education</h4>
                    </div>
                    <div className="flex flex-col p-5 bg-black rounded-lg  flex-1" data-aos="fade-up">
                        <Image
                            src={Icons.notped}
                            alt="support"
                            width={50}
                            height={50}
                            className="bg-[#ddd] p-2.5 rounded-full mb-5"
                        />
                        <h4 className="text-tiny-2xl  font-medium text-white lg:whitespace-nowrap">Utilities & Public Services</h4>
                    </div>
                    <div className="flex flex-col p-5 bg-black rounded-lg  flex-1" data-aos="fade-up">
                        <Image
                            src={Icons.notped}
                            alt="support"
                            width={50}
                            height={50}
                            className="bg-[#ddd] p-2.5 rounded-full mb-5"
                        />
                        <h4 className="text-tiny-2xl  font-medium text-white">Non-Profit</h4>
                    </div>
                </div>
                <div className="flex gap-5 flex-wrap pt-5">
                    <div className="flex flex-col p-5 bg-black rounded-lg  flex-1" data-aos="fade-up">
                        <Image
                            src={Icons.notped}
                            alt="support"
                            width={50}
                            height={50}
                            className="bg-[#ddd] p-2.5 rounded-full mb-5"
                        />
                        <h4 className="text-tiny-2xl  font-medium text-white lg:whitespace-nowrap">Travel & Tourism</h4>
                    </div>
                    <div className="flex flex-col p-5 bg-black rounded-lg  flex-1" data-aos="fade-up">
                        <Image
                            src={Icons.notped}
                            alt="support"
                            width={50}
                            height={50}
                            className="bg-[#ddd] p-2.5 rounded-full mb-5"
                        />
                        <h4 className="text-tiny-2xl  font-medium text-white">Real Estate</h4>
                    </div>
                    <div className="flex flex-col p-5 bg-black rounded-lg  flex-1" data-aos="fade-up">
                        <Image
                            src={Icons.notped}
                            alt="support"
                            width={50}
                            height={50}
                            className="bg-[#ddd] p-2.5 rounded-full mb-5"
                        />
                        <h4 className="text-tiny-2xl  font-medium text-white">Automotive</h4>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Businesscategories;
