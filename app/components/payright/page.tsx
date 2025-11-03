
import Icons from "@/app/constants/Icons";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';


const Payright = () => {
    return (
        <>
            <div className=" flex relative lg:py-40 pb-0  py-20 w-full h-full mx-auto lg:gap-24 items-center flex-wrap justify-between px-10 2xl:container">
                <div className="lg:flex-1">
                    <h2 className=" pb-4 leading-[1.2]  text-medium-2xl !font-bold" data-aos="fade-up"> <span className="text-[#fc9d08]">Pay Right</span>  <br /> Every Time</h2>
                    <p className="text-1x8 font-normal pb-6" data-aos="fade-up">Experience the ease today with payments just a link away. Send and receive money effortlessly now with us.</p>
                    <ul className="pl-4">
                        <li className="list-[circle] pb-2 text-1x8 font-medium" data-aos="fade-up">Streamlined verification process, ensuring secure and reliable transactions</li>
                        <li className="list-[circle] pb-2 text-1x8 font-medium" data-aos="fade-up">Verify bank account or UPI VPA with ease</li>
                        <li className="list-[circle] pb-2 text-1x8 font-medium" data-aos="fade-up">Add beneficiaries and make immediate payouts</li>
                        <li className="list-[circle] pb-2 text-1x8 font-medium" data-aos="fade-up">Reduce failed or reversed transfers with bulk account verification</li>
                    </ul>
                </div>
                <div className="lg:flex-1" data-aos="fade-up">
                    <Image
                        src={Images.payout} alt="support" className="object-cover object-center rounded-none md:w-[100%] w-full" />
                </div>
            </div>
            <div className=" flex relative lg:pt-0 lg:pb-20 py-20 w-full flex-wrap gap-16 h-full mx-auto lg:gap-24 items-center justify-between px-10 2xl:container">
                <div className="lg:flex-1" data-aos="fade-up">
                    <Image
                        src={Images.paynow} alt="support" className="object-cover object-center rounded-none md:w-[100%] w-full" />
                </div>
                <div className="lg:flex-1">
                    <h2 className=" pb-4 leading-none  text-medium-2xl !font-bold" data-aos="fade-up">Pay Right Every Time</h2>
                    <p className="text-1x8 font-normal pb-6" data-aos="fade-up">Experience the ease today with payments just a link away. Send and receive money effortlessly now with us.</p>
                    <ul className="pl-4">
                        <li className="list-[circle] pb-2 text-1x8 font-medium" data-aos="fade-up">Streamlined verification process, ensuring secure and reliable transactions</li>
                        <li className="list-[circle] pb-2 text-1x8 font-medium" data-aos="fade-up">Verify bank account or UPI VPA with ease</li>
                        <li className="list-[circle] pb-2 text-1x8 font-medium" data-aos="fade-up">Add beneficiaries and make immediate payouts</li>
                        <li className="list-[circle] pb-2 text-1x8 font-medium" data-aos="fade-up">Reduce failed or reversed transfers with bulk account verification</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Payright;
