import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';

const Numberstate = () => {
    return (
        <div className="flex relative gap-20 lg:py-40 py-20  flex-wrap  w-full h-full mx-auto   md:max-w-[1350px]">
            <div className="flex flex-wrap gap-10 lg:justify-between justify-center w-full ">
                <div className="flex gap-5 items-center">
                    <Image
                        src={Icons.pincode}
                        alt="support"
                        width={100}
                        height={100}
                        className="" data-aos="fade-up"
                    />
                    <h4 className="text-large-32 font-bold" data-aos="fade-up">15,000+ <br />
                        Pincodes</h4>
                </div>
                <div className="flex gap-5 items-center">
                    <Image
                        src={Icons.pincode}
                        alt="support"
                        width={100}
                        height={100}
                        className="" data-aos="fade-up"
                    />
                    <h4 className="text-large-32 font-bold" data-aos="fade-up">15,000+ <br />
                        Pincodes</h4>
                </div>
                <div className="flex gap-5 items-center">
                    <Image
                        src={Icons.pincode}
                        alt="support"
                        width={100}
                        height={100}
                        className="" data-aos="fade-up"
                    />
                    <h4 className="text-large-32 font-bold" data-aos="fade-up">15,000+ <br />
                        Pincodes</h4>
                </div>
            </div>
        </div>
    );
};

export default Numberstate;
