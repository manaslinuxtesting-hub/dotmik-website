"use client";
import Images from "@/app/constants/images";
import Image from "next/image";
import 'aos/dist/aos.css';

const Team = () => {
    return (
        <>
            <section>
                <div className="w-full h-full mx-auto  2xl:container pb-40">
                    <h2 className="text-heading  leading-[1.2] text-center lg:text-5lg text-5xl  !font-bold" data-aos="fade-up">Empowered
                        Team. Exceptional Vision.</h2>

                    {/* <Image src={Images.team1}  alt="lalit" className=""/> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[70px] pt-24 md:px-24 md:max-w-[1100px] mx-auto justify-items-center">
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src={Images.lalit}
                                alt="lalit"
                                width={200}
                                height={200}
                                className="rounded-full object-cover object-bottom"
                            />
                            <h4 className="text-white  mt-4 text-1x8 font-semibold" data-aos="fade-up">Lalit Yadav</h4>
                            <p className="text-white  text-xextra-small font-normal" data-aos="fade-up">Founder & Director</p>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src={Images.karan}
                                alt="karan"
                                width={200}
                                height={200}
                                className="rounded-full object-cover object-bottom"
                            />
                            <h4 className="text-white  mt-4 text-1x8 font-semibold" data-aos="fade-up">Karan Arora</h4>
                            <p className="text-white  text-xextra-small font-normal" data-aos="fade-up">Sales Manager</p>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src={Images.monesh}
                                alt="monesh"
                                width={200}
                                height={200}
                                className="rounded-full object-cover object-bottom"
                            />
                            <h4 className="text-white  mt-4 text-1x8 font-semibold" data-aos="fade-up">Monesh Sharma</h4>
                            <p className="text-white  text-xextra-small font-normal" data-aos="fade-up">Accountant</p>
                        </div>

                        {/* 👇 Fourth item centered */}
                        <div className="flex flex-col justify-center items-center lg:col-span-full lg:col-span-3 justify-self-center">
                            <Image
                                src={Images.manas}
                                alt="manas"
                                width={200}
                                height={200}
                                className="rounded-full object-cover object-bottom"
                            />
                            <h4 className="text-white  mt-4 text-1x8 font-semibold" data-aos="fade-up">Manas Parida</h4>
                            <p className="text-white text-xextra-small font-normal" data-aos="fade-up">Development Manager</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Team;
