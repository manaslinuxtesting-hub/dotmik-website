import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css'; 

const Billapi = () => {
    return (
        <div className="h-banner blog-banner lg:px-20 px-10 lg:py-40 py-20 autocard-box">
            <div className="flex w-full relative gap-20 h-full lg:flex-nowrap flex-wrap mx-auto items-center md:max-w-[1350px] bg-white rounded-[20px] lg:p-16 p-10 ">
                <div className="flex flex-col md:pb-20 lg:flex-1">
                    <h2 className="pb-6 leading-[1.2] lg:text-medium-2xl !font-bold text-5xl text-black" data-aos="fade-up">
                        Automate Utility Bill <br /> Payments with Our APIs
                    </h2>
                    <div className="flex flex-wrap justify-start gap-3 mt-12" data-aos="fade-up">
                        <Link href="/" className="flex items-center gap-2 px-6 py-2.5 rounded-[50px] bg-black text-white">
                            Launch API
                        </Link>
                        <Link href="/" className="flex items-center gap-2 px-6 py-2.5 rounded-[50px] bg-black text-white">
                            Let's Talk
                        </Link>
                    </div>
                </div>
                <div className="  mx-auto lg:flex-1 lg:w-[80%]"  data-aos="fade-up">
                    <Image
                        src={Images.utilitybillapi} alt="support" quality={100}
                        className="w-full  rounded-lg " />
                </div>
            </div>
        </div>
    );
};

export default Billapi;
