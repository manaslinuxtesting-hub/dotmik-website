import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css'; 

const Effectivesolution = () => {
    return (
        <div className="relative  lg:px-16 px-6 lg:pb-0 pb-20">
            <div className="flex w-full relative lg:gap-20 justify-between h-full lg:flex-nowrap flex-wrap mx-auto  md:max-w-[1350px]  ">
                <div className="flex lg:flex-1 flex-col lg:sticky top-40 h-full lg:py-[200px] py-20">
                    <h2 className="pb-6 leading-[1.2] text-medium-2xl !font-bold  text-5xl text-black" data-aos="fade-up">
                        Simple & Cost - Effective <br /><span className="text-[#fc9d08]">  Acceptance Solution</span>
                    </h2>
                    <p className=" text-small font-normal  text-start text-black" data-aos="fade-up">
                        Accept mobile payments and facilitate point-of-sale <br /> transactions with simple, secure and low cost solutions.
                    </p>
                </div>
                <div className=" lg:flex-1  flex lg:flex-col flex-row lg:overflow-hidden overflow-scroll h-full" data-aos="fade-up">
                    <Image
                        src={Images.cost1} alt="support" quality={100}
                        className="md:w-[80%] mx-auto w-full  rounded-lg lg:py-40" />
                    <Image
                        src={Images.cost2} alt="support" quality={100}
                        className="md:w-[80%] mx-auto w-full  rounded-lg  lg:py-40" />
                    <Image
                        src={Images.cost3} alt="support" quality={100}
                        className="md:w-[80%] mx-auto w-full  rounded-lg lg:py-40 " />
                </div>
            </div>
        </div>
    );
};

export default Effectivesolution;
