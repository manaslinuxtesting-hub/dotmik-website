"use client";
import { useEffect, useState } from "react";
import Images from "@/app/constants/images";
import Image from "next/image";
import Link from "next/link";
import 'aos/dist/aos.css';

const Blogdetails = () => {
    return (
        <>
            <section className="relative h-banner blog-banner lg:pt-40 pt-20">
                <div className=" mx-auto max-w-5xl px-2 flex flex-wrap gap-5">
                    <div className=" flex flex-col gap-5 flex-1  md:px-0 px-10">
                        <h3 className="text-white text-large-36 font-bold leading-[1.2] [line-break:anywhere] " data-aos="fade-up">How to Quickly Increase Development Velocity
                        </h3>
                        <Image
                            src={Images.b1} alt="support" quality={100}
                            className="w-full  rounded-lg mt-5" data-aos="fade-up" />
                        <div className="flex flex-col gap-5 mt-5        ">
                            <p className="text-sm bg-white rounded-lg text-black py-2 px-6 w-fit" data-aos="fade-up">
                                3 Sep 2025
                            </p>
                            <h3 className="text-white text-large-32 font-bold pt-8" data-aos="fade-up">How to Quickly Increase Development Velocity
                            </h3>
                            <p className="text-white text-tiny-2xl  font-normal leading-[1.8]" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! </p>

                            <p className="text-white  text-tiny-2xl  font-normal  leading-[1.8]" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! </p>
                            <h3 className="text-white  text-large-32 font-bold pt-8" data-aos="fade-up">How to Quickly Increase Development Velocity
                            </h3>
                            <p className="text-white  text-tiny-2xl  font-normal  leading-[1.8]" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! </p>
                            <p className="text-white  text-tiny-2xl  font-normal  leading-[1.8]" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! </p>
                            <p className="text-white  text-tiny-2xl  font-normal  leading-[1.8]" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae!  </p>
                            <p className="text-white  text-tiny-2xl  font-normal  leading-[1.8]" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! </p>

                            <h3 className="text-white text-large-32 font-bold pt-8"  data-aos="fade-up">How to Quickly Increase Development Velocity
                            </h3>
                            <p className="text-white  text-tiny-2xl  font-normal  leading-[1.8]" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! </p>
                            <p className="text-white  text-tiny-2xl  font-normal  leading-[1.8]" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, pariatur hic.
                                Natus quia alias, repellat est eligendi reprehenderit debitis neque ut consequuntur
                                excepturi illum a sit voluptatem amet harum vitae! </p>

                        </div>
                    </div>
                    <div className="md:pl-16 w-full md:w-auto">
                        <h2 className="text-white text-tiny-2xl" data-aos="fade-up">Categories</h2>
                        <h4 className="text-small text-white pt-10" data-aos="fade-up" >Our Expertise</h4>
                        <ul className="pt-5 pl-[32px]">
                            <li className="mb-2" data-aos="fade-up" ><Link href="blogcategorie" className="text-white text-xextra-small" > <b>--</b> Software Development</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Website Development</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Application Development</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Digital Marketing</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> SEO Analysis</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Fintech Solutions</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> CRM Solutions</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Recharge Service</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Virtual Account</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small" ><b>--</b> Cash Deposit Machine (CDM)</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Cash Management System (CMS)</Link></li>
                        </ul>
                        <h4 className="text-small text-white pt-10" data-aos="fade-up" >Our Products</h4>
                        <ul className="pt-5 pl-[32px]">
                            <li className="mb-2" data-aos="fade-up" ><Link href="blogcategorie" className="text-white text-xextra-small" ><b>--</b> E-Commerce</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Healthcare</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Banking</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Logistics</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> School Management</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Hotel Management</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Tour & Travels</Link></li>
                        </ul>
                        <h4 className="text-small text-white pt-10"  data-aos="fade-up">Our Api's</h4>
                        <ul className="pt-5 pl-[32px]">
                            <li className="mb-2" data-aos="fade-up" ><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> BBPS</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Recharge</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Flight Booking</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Bus Booking</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Bank Account Opening</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Demat Account Opening</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Credit Card Apply</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Credit Card Bill Payment</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Personal Loan Apply</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Business Loan Apply</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Credit Line</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Insurance</Link></li>
                        </ul>
                        <h4 className="text-small text-white pt-10" data-aos="fade-up" >Verification Api's</h4>
                        <ul className="pt-5 pl-[32px]">
                            <li className="mb-2"  data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small" ><b>--</b> Aadhar verification</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Aadhar Pro verification</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Pan Verfication</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> Pan Pro Verfication</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> GST Verfication</Link></li>
                            <li className="mb-2" data-aos="fade-up"><Link href="blogcategorie" className="text-white text-xextra-small"><b>--</b> UPI Verfication</Link></li>
                        </ul>
                    </div>


                </div>

            </section>
        </>
    );
};

export default Blogdetails;
