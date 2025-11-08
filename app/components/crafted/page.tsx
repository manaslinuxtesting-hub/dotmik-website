
import Icons from "@/app/constants/Icons";
import Image from "next/image";
import Images from "@/app/constants/images";
import 'aos/dist/aos.css'; 

const Crafted = () => {
    return (
        <>
            <div className="flex relative flex-wrap lg:py-40 py-20 w-full h-full mx-auto gap-24 items-end justify-between px-10 md:max-w-[1350px]">
                <div className="lg:flex-1">
                    <p className="text-large-24  font-medium mb-2"  data-aos="fade-up">Crafted for</p>
                    <h2 className=" pb-8 leading-none text-large-36  !font-bold text-5xl" data-aos="fade-up">Startups, SMBs & Enterprises
                    </h2>
                    <p className="text-small " data-aos="fade-up">Go beyond simple bank transfers with features designed to boost your
                        business. Make faster payouts with all popular payment options and get a powerful dashboard to handle all your business financials.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
                        <div className="flex flex-col" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#0000002e] p-2.5 rounded-full mb-6"
                            />
                            <h4 className=" text-tiny-2xl font-medium leading-none">Team Expenses</h4>
                            <p className="text-xextra-small  pt-2">Empower your workforce with instant and secure access to their wages, simplifying payroll management.</p>
                        </div>
                        <div className="flex flex-col" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#0000002e] p-2.5 rounded-full mb-6"
                            />
                            <h4 className="text-tiny-2xl font-medium leading-none">Rewards & Recognition</h4>
                            <p className="text-xextra-small  pt-2">The perfect solution for employee rewards & partner incentives.</p>
                        </div>
                        <div className="flex flex-col mt-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#0000002e] p-2.5 rounded-full mb-6"
                            />
                            <h4 className=" text-tiny-2xl font-medium leading-none">Fleet Management</h4>
                            <p className="text-xextra-small  pt-2">Streamline fleet expenses with driver-issued expense cards for direct fuel and maintenance control across regions</p>
                        </div>
                        <div className="flex flex-col mt-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#0000002e] p-2.5 rounded-full mb-6"
                            />
                            <h4 className=" text-tiny-2xl font-medium leading-none">Easy Reimbursements</h4>
                            <p className="text-xextra-small  pt-2">Quick & easy employee reimbursements with real time expense tracking.</p>
                        </div>
                        <div className="flex flex-col mt-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#0000002e] p-2.5 rounded-full mb-6"
                            />
                            <h4 className=" text-tiny-2xl font-medium leading-none">Petty Cash</h4>
                            <p className="text-xextra-small  pt-2">Issue petty cash funds on cards anytime from your business account.</p>
                        </div>
                        <div className="flex flex-col mt-8" data-aos="fade-up">
                            <Image
                                src={Icons.notped}
                                alt="support"
                                width={50}
                                height={50}
                                className="bg-[#0000002e] p-2.5 rounded-full mb-6"
                            />
                            <h4 className=" text-tiny-2xl font-medium leading-none">Blue Collar Payroll</h4>
                            <p className="text-xextra-small  pt-2">Empower your team with easy & secure access to funds anywhere</p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex-1 mx-auto" data-aos="fade-up">
                    <Image
                        src={Images.crafted} alt="support" quality={100}
                        className="w-full  rounded-lg" />
                </div>
            </div>

        </>
    );
};

export default Crafted;
