// "use client";
// import { useEffect, useState } from "react";
// import Icons from "@/app/constants/Icons";
// import Link from "next/link";
// import Image from "next/image";

// const States = () => {
//     return (
//         <section className="relative h-banner contact-banner pt-24">
//             <h1 className="text-center pt-10 lg:pb-8 pb-0 leading-none text-white lg:text-large-7xl text-5lg ">
//                 Connect with us
//             </h1>

//             <div className="w-full h-full mx-auto 2xl:container mt-8 md:px-8">
//                 <div className="flex gap-4 flex-wrap px-8 md:px-0">
//                     {/* Card 1 */}
//                     <div className="border border-white rounded-lg px-8 py-8 flex-1 flex flex-col justify-between  shadow-[0px_1px_4px_0px_#fff]">
//                         <div className="flex flex-col">
//                             <Image
//                                 src={Icons.support}
//                                 alt="support"
//                                 width={35}
//                                 height={35}
//                                 className="w-[20px] h-[20px] md:w-[35px] md:h-[35px] mb-2"
//                             />
//                             <h4 className="text-white text-tiny-2xl mb-2">Customer Support</h4>
//                             <p className="text-white">
//                                 Get help with any issues or questions about our services through
//                                 our dedicated 24/7 customer support.
//                             </p>
//                         </div>
//                         <Link href="/" className="flex items-center gap-2 banner-button mt-8 w-fit">
//                             Get Support
//                         </Link>
//                     </div>

//                     {/* Card 2 */}
//                     <div className="border border-white rounded-lg px-8 py-8 flex-1 flex flex-col justify-between  shadow-[0px_1px_4px_0px_#fff]">
//                         <div className="flex flex-col">
//                             <Image
//                                 src={Icons.sales}
//                                 alt="sales"
//                                 width={35}
//                                 height={35}
//                                 className="w-[20px] h-[20px] md:w-[35px] md:h-[35px] mb-2"
//                             />
//                             <h4 className="text-white text-tiny-2xl mb-2">Sales</h4>
//                             <p className="text-white">
//                                 Our sales team is ready to discuss how our services can meet your
//                                 business banking needs and answer any questions.
//                             </p>
//                         </div>
//                         <Link href="/" className="flex items-center gap-2 banner-button mt-8 w-fit">
//                             Contact Sales   
//                         </Link>
//                     </div>

//                     {/* Card 3 */}
//                     <div className="border border-white rounded-lg px-8 py-8 flex-1 flex flex-col justify-between  shadow-[0px_1px_4px_0px_#fff]">
//                         <div className="flex flex-col">
//                             <Image
//                                 src={Icons.partnership}
//                                 alt="partnership"
//                                 width={35}
//                                 height={35}
//                                 className="w-[20px] h-[20px] md:w-[35px] md:h-[35px] mb-2"
//                             />
//                             <h4 className="text-white text-tiny-2xl mb-2">Alliance Partnership</h4>
//                             <p className="text-white">
//                                 Let’s explore partnership opportunities to grow and innovate
//                                 together in the world of digital banking.
//                             </p>
//                         </div>
//                         <Link href="/" className="flex items-center gap-2 banner-button mt-8 w-fit">
//                              Partner Now   
//                         </Link>
//                     </div>
//                 </div>


//                 <div className="flex md:pt-24 pt-8 flex-wrap px-8 md:px-0">
//                     <div className="relative flex-1">
//                         <div className="flex flex-col gap-5">
//                             <h4 className="text-white text-tiny-2xl">Contact Info</h4>
//                             <Link href="tel:+9355880074" className="text-white hover:text-gray-300 transition">+91-9355880074</Link>
//                             <Link href="mailto:info@dotmik.com" className="text-white hover:text-gray-300 transition">info@dotmik.com</Link>
//                         </div>
//                         <div className="flex flex-col gap-5 mt-10">
//                             <h4 className="text-white text-tiny-2xl">Visit our office</h4>
//                             <Link href="#" className="text-white hover:text-gray-300 transition">DotMik, G-Block, Street No.8, Prem Nagar, Najafgarh, <br /> South West Delhi, New Delhi 110043</Link>

//                         </div>

//                     </div>
//                     <div className="relative flex-1 border border-white rounded-[14px] p-10 border-y-[6px] mt-10 md:mt-0 ">
//                         <div className="flex gap-10 flex-wrap">
//                             <div className="flex flex-col flex-1">
//                                 <label htmlFor="name" className="text-white">First Name</label>
//                                 <input type="text" placeholder="Enter Your First Name" className="text-white border border-white p-2 rounded-lg mt-2.5 shadow-[0px_1px_4px_0px_#fff]" />
//                             </div>
//                             <div className="flex flex-col flex-1">
//                                 <label htmlFor="phone" className="text-white">Phone</label>
//                                 <input type="tel" placeholder="Enter Your Phone No." className="text-white border border-white p-2 rounded-lg mt-2.5 shadow-[0px_1px_4px_0px_#fff]" />
//                             </div>
//                         </div>

//                         <div className="flex gap-10 mt-8 flex-wrap">
//                             <div className="flex flex-col flex-1">
//                                 <label htmlFor="name" className="text-white">Your Website Link</label>
//                                 <input type="text" placeholder="https://www.dotmik.com" className="text-white border border-white p-2 rounded-lg mt-2.5 shadow-[0px_1px_4px_0px_#fff]" />
//                             </div>

//                             <div className="flex flex-col flex-1">
//                                 <label htmlFor="email" className="text-white">Email</label>
//                                 <input type="email" placeholder="Enter Your Email" className="text-white border border-white p-2 rounded-lg mt-2.5 shadow-[0px_1px_4px_0px_#fff]" />
//                             </div>
//                         </div>
//                         <div className="flex flex-col flex-1 mt-8 flex-wrap">
//                             <label htmlFor="message" className="text-white">Message</label>
//                             <textarea name="message" placeholder="Enter Your Name" className="text-white border border-white p-2 rounded-lg mt-2.5 shadow-[0px_1px_4px_0px_#fff]"></textarea>
//                         </div>
//                         <Link href="/" className="flex items-center gap-2 banner-button mt-18 w-fit shadow-[0px_1px_4px_0px_#fff]">
//                             Submit
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default States;
