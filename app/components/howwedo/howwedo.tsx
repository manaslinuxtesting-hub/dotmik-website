"use client";
import { useEffect, useState } from "react";
import Icons from "@/app/constants/Icons";
import Image from "next/image";
import Link from "next/link";

const Howwedo = () => {
    return (
        <section className="w-full relative w-full 2xl:container mx-auto bg-gradient-to-br from-blue-200 via-pink-200 to-red-200 min-h-screen rounded-[36px] px-[40px] py-[60px]">
            <div className="flex">
                <div className=" flex flex-none w-[255px] flex flex-col items-start justify-between h-screen">
                    <div>
                        <p className="text-base tracking-[0.1em] text-yellowDark-100">Our Model</p>
                        <h2 className="text-[40px] font-semibold leading-[2] py-[4px]">How we do</h2>
                    </div>
                    <Link href="#" className="flex items-center gap-2 banner-button">
                        Login
                    </Link>
                </div>
                <div className="relative">
                    <div className="flex flex-wrap">
                        <div className="flex gap-3 bg-white p-4 rounded-lg">
                            <Image
                                src={Icons.hwd1}
                                alt="Logo"
                                width={40}
                                height={30} className="bg-[#fd6c6e59] p-2 rounded-lg"
                            />
                            <div className="block">
                                <h6 className="text-yellowDark-100 text-base font-semibold text-sm tracking-[0.8px]">Brainstroming</h6>
                                <p className="text-xs tracking-[.1em]">Ideas</p>
                            </div>
                        </div>
                        <div className="flex gap-3 bg-white p-4 rounded-lg">
                            <Image
                                src={Icons.hwd1}
                                alt="Logo"
                                width={40}
                                height={30} className="bg-[#fd6c6e59] p-2 rounded-lg"
                            />
                            <div className="block">
                                <h6 className="text-yellowDark-100 text-base font-semibold text-sm tracking-[0.8px]">Product</h6>
                                <p className="text-xs tracking-[.1em]">Design</p>
                            </div>
                        </div>
                        <div className="flex gap-3 bg-white p-4 rounded-lg">
                            <Image
                                src={Icons.hwd1}
                                alt="Logo"
                                width={40}
                                height={30} className="bg-[#fd6c6e59] p-2 rounded-lg"
                            />
                            <div className="block">
                                <h6 className="text-yellowDark-100 text-base font-semibold text-sm tracking-[0.8px]">Front-End</h6>
                                <p className="text-xs tracking-[.1em]">Development</p>
                            </div>
                        </div>
                        <div className="flex gap-3 bg-white p-4 rounded-lg">
                            <Image
                                src={Icons.hwd1}
                                alt="Logo"
                                width={40}
                                height={30} className="bg-[#fd6c6e59] p-2 rounded-lg"
                            />
                            <div className="block">
                                <h6 className="text-yellowDark-100 text-base font-semibold text-sm tracking-[0.8px]">SEO</h6>
                                <p className="text-xs tracking-[.1em]">Optimization</p>
                            </div>
                        </div>
                        <div className="flex gap-3 bg-white p-4 rounded-lg">
                            <Image
                                src={Icons.hwd1}
                                alt="Logo"
                                width={40}
                                height={30} className="bg-[#fd6c6e59] p-2 rounded-lg"
                            />
                            <div className="block">
                                <h6 className="text-yellowDark-100 text-base font-semibold text-sm tracking-[0.8px]">Back-End</h6>
                                <p className="text-xs tracking-[.1em]">Development</p>
                            </div>
                        </div>
                        <div className="flex gap-3 bg-white p-4 rounded-lg">
                            <Image
                                src={Icons.hwd1}
                                alt="Logo"
                                width={40}
                                height={30} className="bg-[#fd6c6e59] p-2 rounded-lg"
                            />
                            <div className="block">
                                <h6 className="text-yellowDark-100 text-base font-semibold text-sm tracking-[0.8px]">Digital</h6>
                                <p className="text-xs tracking-[.1em]">Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Howwedo;
