import Icons from "@/app/constants/Icons";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';

const Insurancesolutions = () => {
    return (
        <div className="lg:px-20 px-10 lg:py-40 py-20 relative ">
            <div className="w-full gap-14 h-full flex flex-wrap items-center mx-auto md:max-w-[1350px]">
                <div className="flex flex-col lg:flex-1">
                    <h2 className="leading-[1.2] text-medium-2xl !font-bold text-black" data-aos="fade-up">Secure Business with Customised Insurance Solutions</h2>
                    <div className="flex flex-wrap gap-3 mt-12" data-aos="fade-up">
                        <Link href="/" className="flex  gap-2 border border-black bg-black px-8 py-[10px] rounded-full text-white">
                            Ask Advisors
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-1" data-aos="fade-up">
                    <Image
                        src={Images.cyber}
                        alt="support"
                        quality={100}
                        className="w-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Insurancesolutions;
