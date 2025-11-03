
import Icons from "@/app/constants/Icons";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css';


const Billcategories = () => {
    return (
        <>
            <div className="flex relative lg:py-40 py-20 w-full h-full mx-auto lg:gap-24 items-center justify-between px-10 2xl:container">
                <div className="lg:flex-1">
                    <h2 className=" pb-8 leading-[1.2] text-medium-2xl !font-bold" data-aos="fade-up">Pay with 20,000+ Billers <br /> Across 20+ Categories</h2>
                    <p className="text-small font-normal " data-aos="fade-up">Automate and centralise all recurring expenses — from utilities to healthcare — into one unified view for seamless bill management.</p>
                    <ul className="pt-8">
                        <li className="list-[circle] pb-2 text-small font-medium" data-aos="fade-up">Schedule & pay multiple bills in one go.</li>
                        <li className="list-[circle] pb-2 text-small font-medium" data-aos="fade-up">Get a consolidated view of all enterprise bills.</li>
                        <li className="list-[circle] pb-2 text-small font-medium" data-aos="fade-up">Track payments status in real-time</li>
                        <li className="list-[circle] pb-2 text-small font-medium" data-aos="fade-up">Instant notification & reminders over email.</li>
                    </ul>
                </div>
                <div className="lg:flex-1">
                    <Image
                        src={Images.paybill} alt="support" className="object-cover object-center  lg:w-[70%] w-full mx-auto" />
                </div>
            </div>
            <div className="h-banner blog-banner lg:!pb-0">
                <div className="flex relative lg:py-30  flex-wrap !items-center lg:py-20 pt-20 pb-0  w-full h-full mx-auto lg:gap-24 items-end justify-between px-10 2xl:container">
                    <div className="lg:flex-1">
                        <h2 className=" pb-8 leading-none text-white text-large-36 !font-bold  text-5xl" data-aos="fade-up">One Click Payment</h2>
                        <p className="text-small font-normal text-white" data-aos="fade-up">Pay all your utility bills on-the-go with our central <br /> dashboard or mobile app , accessible 24/7</p>

                    </div>
                    <div className="lg:flex-1  " data-aos="fade-up">
                        <Image
                            src={Images.oneclick} alt="support" className="object-cover object-center rounded-none lg:w-[70%] w-full mx-auto" />
                    </div>
                </div>
            </div>
            <div className="flex relative flex-wrap lg:py-40 py-20 w-full h-full mx-auto lg:gap-24 items-center justify-between px-10 2xl:container">
                <div className="lg:flex-1" data-aos="fade-up">
                    <Image
                        src={Images.managebill} alt="support" className="object-cover object-center rounded-none md:w-[70%] w-full" />
                </div>
                <div className="lg:flex-1">
                    <h2 className=" pb-8 leading-[1.2]  text-5xl lg:text-large-36 !font-bold" data-aos="fade-up"> Manage Bills for <br /> <span className="text-[#fc9d08]">Multiple Locations</span>  </h2>
                    <p className="text-small font-normal text-black" data-aos="fade-up">Access our user-friendly dashboard providing a comprehensive view of all bill payments and their reconciliation status.</p>

                </div>
            </div>
            <div className="h-banner blog-banner">
                <div className="flex relative flex-wrap gap-10 lg:gap-0 lg:py-40 py-20 w-full h-full mx-auto lg:gap-24 items-center    justify-between px-10 2xl:container">
                    <div className="lg:flex-1">
                        <h2 className=" pb-8 leading-[1.2] text-white lg:text-large-36 !font-bold text-5xl" data-aos="fade-up">Reconcile All <br /> <span className="text-[#fc9d08]"> Bill Payments</span></h2>
                        <p className="text-small font-normal text-white" data-aos="fade-up">Access our user-friendly dashboard providing a comprehensive view of all bill payments and their reconciliation status.</p>
                    </div>
                    <div className="lg:flex-1" data-aos="fade-up">
                        <Image
                            src={Images.reconcile} alt="support" className="object-cover object-center rounded-none md:w-[90%] w-full" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Billcategories;
