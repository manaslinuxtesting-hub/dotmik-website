"use client";
import { useEffect, useState } from "react";
import Images from "@/app/constants/images";
import Image from "next/image";
import Link from "next/link";
import 'aos/dist/aos.css'; 

const Blog = () => {
    return (
        <>
            <section className="relative h-banner blog-banner md:pt-40 pt-20">
                <div className="  mx-auto max-w-4xl text-center pt-8 pb-20 px-10">
                    <h2 className=" text-white leading-[1.2] text-white text-center lg:text-medium-50 !font-bold   text-large-30 " data-aos="fade-up" >Stay Ahead With Our Latest Blogs</h2>
                    <p className="text-white  text-small font-normal text-xl px-5 text-center pt-5" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                        Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                        excepturi illum a sit voluptatem amet harum vitae!</p>
                </div>

                <div className="flex w-full 2xl:container mx-auto gap-10 md:px-16 px-4 grid  
                grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                <h4 className="text-white text-large-30 text-center lg:pt-30 pt-16 pb-2  border-b border-white w-fit mx-auto" data-aos="fade-up">API
                </h4>
                <div className="flex w-full 2xl:container mx-auto gap-10 md:px-16 px-4  pt-16 grid  
                grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                <h4 className="text-white text-large-30 text-center lg:pt-30 pt-16 pb-2  border-b border-white w-fit mx-auto" data-aos="fade-up">Payments
                </h4>
                <div className="flex w-full 2xl:container mx-auto gap-10 md:px-16 px-4   pt-16 grid  
                grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                <h4 className="text-white text-large-30 text-center lg:pt-30 pt-16 pb-2  border-b border-white w-fit mx-auto" data-aos="fade-up">Banking
                </h4>
                <div className="flex w-full 2xl:container mx-auto gap-10 md:px-16 px-4   pt-16 grid  
                grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                <h4 className="text-white text-large-30 text-center lg:pt-30 pt-16 pb-2  border-b border-white w-fit mx-auto" data-aos="fade-up">Insurance
                </h4>
                <div className="flex w-full 2xl:container mx-auto gap-10 md:px-16  px-4  pt-16 grid  
                grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                <h4 className="text-white text-large-30 text-center lg:pt-30 pt-16 pb-2  border-b border-white w-fit mx-auto" data-aos="fade-up">Inclusive Banking
                </h4>
                <div className="flex w-full 2xl:container mx-auto gap-10 md:px-16 px-4  pt-16 grid  
                grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

export default Blog;
