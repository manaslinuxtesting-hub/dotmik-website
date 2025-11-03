import Icons from "@/app/constants/Icons";
import Link from "next/link";
import 'aos/dist/aos.css'; 
import Images from "@/app/constants/images";
import Image from "next/image";
const Security = () => {
    return (
        <div className="bg-white py-20 ">
            <div className="relative  w-full h-full mx-auto  px-10 md:max-w-[1350px]">
                <div className="flex flex-wrap gap-16 lg:gap-0 items-center justify-between lg:flex-nowrap">
                    <div className="lg:flex-1">
                        <h2 className="pb-6 leading-none text-5xl text-black !font-semibold "  data-aos="fade-up">Protected by Robust Security</h2>
                        <ul className="lg:columns-2 pl-6">
                            <li className=" list-[circle] pb-3 text-black"  data-aos="fade-up">Multi-layered Security with 2FA</li>
                            <li className=" list-[circle] text-black"  data-aos="fade-up">Regular Security Audits</li>
                            <li className=" list-[circle] pb-3 text-black"  data-aos="fade-up"> Fraud Monitoring</li>
                            <li className="list-[circle] text-black"  data-aos="fade-up"> Real-Time Authentication</li>
                        </ul>
                    </div>
                    <div className="lg:flex-1 ">
                         <Image
                            src={Images.security} alt="support" className="object-cover object-center rounded-none w-full lg:ml-auto  md:w-[50%] " />
                    </div>     
                </div>
            </div>
        </div>
    );
};

export default Security;
    