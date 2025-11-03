"use client";
import { useEffect, useState } from "react";
import Images from "@/app/constants/images";
import Image from "next/image";
import Link from "next/link";
import 'aos/dist/aos.css'; 

const Blogcategorie = () => {
    return (
        <>
            <section className="relative h-banner blog-banner pt-10">
                <h4 className="text-white text-large-30 font-semibold text-center lg:pt-30 pt-20 pb-2  border-b border-white w-fit mx-auto" data-aos="fade-up">API
                </h4>
                <div className="flex w-full 2xl:container mx-auto gap-10 md:px-16 px-4  pt-16 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="border border-white p-8 rounded-2xl " data-aos="fade-up">
                        <Link href="/blogdetails" className="flex flex-col gap-5 ">
                            <Image
                                src={Images.b1} alt="support" quality={100}
                                className="w-full  rounded-lg" />
                            <div className="flex flex-col gap-5">
                                <p className="text-sm bg-white rounded-lg text-black py-2 px-6 w-fit">
                                    3 Sep 2025
                                </p>
                                <h3 className="text-white text-large-24 font-bold">How to Quickly Increase Development Velocity
                                </h3>
                                <p className="text-white text-sm leading-[1.8]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                    Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                    excepturi illum a sit voluptatem amet harum vitae!</p> 
                            </div>
                        </Link>
                    </div>
                    <div className="border border-white p-8 rounded-2xl " data-aos="fade-up">
                        <Link href="/blogdetails" className="flex flex-col gap-5 ">

                            <Image
                                src={Images.b1} alt="support" quality={100}
                                className="w-full  rounded-lg" />
                            <div className="flex flex-col gap-5">
                                <p className="text-sm bg-white rounded-lg text-black py-2 px-6 w-fit">
                                    3 Sep 2025
                                </p>
                                <h3 className="text-white text-large-24 font-bold">How to Quickly Increase Development Velocity
                                </h3>
                                <p className="text-white text-sm leading-[1.8]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                    Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                    excepturi illum a sit voluptatem amet harum vitae!</p> 
                            </div>
                        </Link>
                    </div>
                    <div className="border border-white p-8 rounded-2xl " data-aos="fade-up">
                        <Link href="/blogdetails" className="flex flex-col gap-5 ">

                            <Image
                                src={Images.b1} alt="support" quality={100}
                                className="w-full  rounded-lg" />
                            <div className="flex flex-col gap-5">
                                <p className="text-sm bg-white rounded-lg text-black py-2 px-6 w-fit">
                                    3 Sep 2025
                                </p>
                                <h3 className="text-white text-large-24 font-bold">How to Quickly Increase Development Velocity
                                </h3>
                                <p className="text-white text-sm leading-[1.8]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                    Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                    excepturi illum a sit voluptatem amet harum vitae!</p> 
                            </div>
                        </Link>
                    </div>
                    <div className="border border-white p-8 rounded-2xl " data-aos="fade-up">
                        <Link href="/blogdetails" className="flex flex-col gap-5 ">

                            <Image
                                src={Images.b1} alt="support" quality={100}
                                className="w-full  rounded-lg" />
                            <div className="flex flex-col gap-5">
                                <p className="text-sm bg-white rounded-lg text-black py-2 px-6 w-fit">
                                    3 Sep 2025
                                </p>
                               <h3 className="text-white text-large-24 font-bold">How to Quickly Increase Development Velocity
                                </h3>
                                <p className="text-white text-sm leading-[1.8]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                    Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                    excepturi illum a sit voluptatem amet harum vitae!</p> 
                            </div>
                        </Link>
                    </div>

                    <div className="border border-white p-8 rounded-2xl " data-aos="fade-up">
                        <Link href="/blogdetails" className="flex flex-col gap-5 ">

                            <Image
                                src={Images.b1} alt="support" quality={100}
                                className="w-full  rounded-lg" />
                            <div className="flex flex-col gap-5">
                                <p className="text-sm bg-white rounded-lg text-black py-2 px-6 w-fit">
                                    3 Sep 2025
                                </p>
                               <h3 className="text-white text-large-24 font-bold">How to Quickly Increase Development Velocity
                                </h3>
                                <p className="text-white text-sm leading-[1.8]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                    Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                    excepturi illum a sit voluptatem amet harum vitae!</p> 
                            </div>
                        </Link>
                    </div>
                    <div className="border border-white p-8 rounded-2xl " data-aos="fade-up">
                        <Link href="/blogdetails" className="flex flex-col gap-5 ">

                            <Image
                                src={Images.b1} alt="support" quality={100}
                                className="w-full  rounded-lg" />
                            <div className="flex flex-col gap-5">
                                <p className="text-sm bg-white rounded-lg text-black py-2 px-6 w-fit">
                                    3 Sep 2025
                                </p>
                               <h3 className="text-white text-large-24 font-bold">How to Quickly Increase Development Velocity
                                </h3>
                                <p className="text-white text-sm leading-[1.8]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                    Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                    excepturi illum a sit voluptatem amet harum vitae!</p> 
                            </div>
                        </Link>
                    </div>
                    <div className="border border-white p-8 rounded-2xl " data-aos="fade-up">
                        <Link href="/blogdetails" className="flex flex-col gap-5 ">

                            <Image
                                src={Images.b1} alt="support" quality={100}
                                className="w-full  rounded-lg" />
                            <div className="flex flex-col gap-5">
                                <p className="text-sm bg-white rounded-lg text-black py-2 px-6 w-fit">
                                    3 Sep 2025
                                </p>
                              <h3 className="text-white text-large-24 font-bold">How to Quickly Increase Development Velocity
                                </h3>
                                <p className="text-white text-sm leading-[1.8]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                    Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                    excepturi illum a sit voluptatem amet harum vitae!</p> 
                            </div>
                        </Link>
                    </div>
                    <div className="border border-white p-8 rounded-2xl " data-aos="fade-up">
                        <Link href="/blogdetails" className="flex flex-col gap-5 ">

                            <Image
                                src={Images.b1} alt="support" quality={100}
                                className="w-full  rounded-lg" />
                            <div className="flex flex-col gap-5">
                                <p className="text-sm bg-white rounded-lg text-black py-2 px-6 w-fit">
                                    3 Sep 2025
                                </p>
                               <h3 className="text-white text-large-24 font-bold">How to Quickly Increase Development Velocity
                                </h3>
                                <p className="text-white text-sm leading-[1.8]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                    Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                    excepturi illum a sit voluptatem amet harum vitae!</p> 
                            </div>
                        </Link>
                    </div>
                    <div className="border border-white p-8 rounded-2xl " data-aos="fade-up">
                        <Link href="/blogdetails" className="flex flex-col gap-5 ">

                            <Image
                                src={Images.b1} alt="support" quality={100}
                                className="w-full  rounded-lg" />
                            <div className="flex flex-col gap-5">
                                <p className="text-sm bg-white rounded-lg text-black py-2 px-6 w-fit">
                                    3 Sep 2025
                                </p>
                               <h3 className="text-white text-large-24 font-bold">How to Quickly Increase Development Velocity
                                </h3>
                                <p className="text-white text-sm leading-[1.8]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                    Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                    excepturi illum a sit voluptatem amet harum vitae!</p> 
                            </div>
                        </Link>
                    </div>
                    <div className="border border-white p-8 rounded-2xl " data-aos="fade-up">
                        <Link href="/blogdetails" className="flex flex-col gap-5 ">

                            <Image
                                src={Images.b1} alt="support" quality={100}
                                className="w-full  rounded-lg" />
                            <div className="flex flex-col gap-5">
                                <p className="text-sm bg-white rounded-lg text-black py-2 px-6 w-fit">
                                    3 Sep 2025
                                </p>
                              <h3 className="text-white text-large-24 font-bold">How to Quickly Increase Development Velocity
                                </h3>
                                <p className="text-white text-sm leading-[1.8]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                    Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                    excepturi illum a sit voluptatem amet harum vitae!</p> 
                            </div>
                        </Link>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Blogcategorie;
