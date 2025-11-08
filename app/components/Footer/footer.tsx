"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '@/app/constants/Icons';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 1400);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            <footer className="relative bg-black  py-12 lg:py-24   px-10 footer-box">
                <div className="w-full md:max-w-[1350px] mx-auto">
                    <div className="flex justify-between lg:gap-50 gap-20 flex-wrap border-b border-[#ddd] pb-[50px]">
                        <div className="lg:flex-1">
                            <Link href="/"
                                className="text-white font-extrabold text-[28px] sm:text-[34px] tracking-[1.5px] ">
                                <h2 className='pb-4 !font-bold'><span className="text-[#fc9d08]">Dot</span>Mik</h2>
                            </Link>
                            <p className='text-white'>DotMik is not a bank, but in today’s digital world we make your business
                                run effortlessly. We provide exceptional services that bring your business on automation, enabling your
                                verified customers to move forward smoothly. You can build customized software, receive or send payments
                                in the blink of an eye, place orders before time, clear invoice payments faster than a breath, and even
                                schedule payments before the thought arises. With DotMik, every need — whether technical or fintech — is
                                fulfilled instantly with just one click.
                            </p>
                            <br />
                            <p className='text-white'>DotMik — One Click. Infinite Possibilities.</p>
                        </div>
                        <div className="lg:flex-1 flex lg:justify-end justify-start lg:gap-40 gap-20 flex-wrap">
                            <ul>
                                <h4 className="text-white text-small pb-5">Association</h4>
                                <li className="pb-3"><Link href="aboutus" className="text-white ">Footprint</Link> </li>
                                <li className="pb-3"><Link href="blogs" className="text-white">Diaries</Link></li>
                                <li className="pb-3"> <Link href="careers" className="text-white" >Career Track</Link></li>
                                <li className="pb-3"> <Link href="contactus" className="text-white">Reach DotMik</Link></li>
                            </ul>
                            <ul>
                                <h4 className="text-white text-small pb-5">Legal</h4>
                                <li className="pb-3"><Link href="termsconditions" className="text-white ">Terms & Conditions</Link> </li>
                                <li className="pb-3"><Link href="privacypolicy" className="text-white">Privacy & Policy</Link></li>
                                <li className="pb-3"> <Link href="refundpolicy" className="text-white" >Refund Policy</Link></li>
                                <li className="pb-3"> <Link href="cancellationpolicy" className="text-white">Cancellation Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap pt-[20px] gap-5">
                        <div className="lg:flex-1">
                            <p className="text-white  text-extra-small pb-2">DotMik is committed to your safety. We never ask for sensitive information like PINs or OTPs.</p>
                            <p className="text-white text-extra-small">Corporate Identification Number (CIN): U62091DL2024PTC428732  | GST Number: 07AAKCD7375A1ZN</p>
                        </div>
                        <div className="lg:flex-1 flex flex-wrap lg:justify-end justify-start gap-4">
                            <p className='text-white pr-2'>Join Our Comunity :</p>
                            <Link href="#" className="text-white "></Link>
                            <div className="flex gap-4">
                                <Link href="#" target="_blank">
                                    <FaFacebookF className="w-5 h-5 text-white hover:text-blue-600" />
                                </Link>
                                <Link href="#" target="_blank">
                                    <FaTwitter className="w-5 h-5 text-white hover:text-sky-500" />
                                </Link>
                                <Link href="#" target="_blank">
                                    <FaInstagram className="w-5 h-5 text-white hover:text-pink-500" />
                                </Link>
                                <Link href="#" target="_blank">
                                    <FaYoutube className="w-5 h-5 text-white hover:text-red-600" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;