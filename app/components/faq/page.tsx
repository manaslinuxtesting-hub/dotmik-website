"use client";
import { useState } from "react";
import 'aos/dist/aos.css'; 



const Faq = () => {
    const [open, setOpen] = useState(null);

    const toggle = (id) => {
        setOpen(open === id ? null : id);
    };

    return (
        <div className="h-banner blog-banner lg:py-40 py-20 lg:px-20 px-10 ">
            <div className="w-full relative gap-6 h-full mx-auto md:max-w-[1350px] " data-aos="fade-up">

                {/* Accordion Item 1 */}
                <h2>
                    <button
                        onClick={() => toggle(1)}
                        className="flex items-center text-start justify-between w-full p-5 font-medium text-white border border-b-0 border-gray-200 rounded-t-xl hover:bg-black gap-3"
                    >
                        <span>What is Connected Banking?</span>
                        <svg
                            className={`w-3 h-3 transform transition-transform ${open === 1 ? "-rotate-0" : "rotate-180"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 10 6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>

                    </button>
                </h2>
                {open === 1 && (
                    <div className="p-5 border border-b-0 border-gray-200">
                        <p className="mb-2  text-white">
                            Connected banking, also known as open banking, allows you to connect all your bank accounts into a single platform. This way, businesses can see all your finances in one place, making it easier to manage finances.
                        </p>
                    </div>
                )}

                {/* Accordion Item 2 */}
                <h2>
                    <button
                        onClick={() => toggle(2)}
                        className="flex items-center text-start justify-between w-full p-5 font-medium text-white border border-b-0 border-gray-200 hover:bg-black gap-3"
                    >
                        <span>How does connected banking benefit businesses?</span>
                        <svg
                            className={`w-3 h-3 transform transition-transform ${open === 1 ? "-rotate-0" : "rotate-180"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 10 6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                {open === 2 && (
                    <div className="p-5 border border-b-0 border-gray-200">
                        <p className="mb-2  text-white">
                            Connected banking offers real-time visibility, simplified financial management, direct payouts, automated reconciliation, and support from major banks, streamlining operations and enhancing efficiency.
                        </p>
                    </div>
                )}

                {/* Accordion Item 3 */}
                <h2>
                    <button
                        onClick={() => toggle(3)}
                        className="flex items-center text-start justify-between w-full p-5 font-medium text-white border border-gray-200 hover:bg-black gap-3 "
                    >
                        <span>Is connected banking secure?</span>
                        <svg
                            className={`w-3 h-3 transform transition-transform ${open === 1 ? "-rotate-0" : "rotate-180"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 10 6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                {open === 3 && (
                    <div className="p-5 border border-t-0 border-gray-200">
                        <p className="mb-2  text-white">
                            Yes, Instantpay leverages industry-leading encryption and authentication protocols to ensure the utmost security of your financial data.
                        </p>
                    </div>
                )}
                {/* Accordion Item 4 */}
                <h2>
                    <button
                        onClick={() => toggle(4)}
                        className="flex items-center text-start justify-between w-full p-5 font-medium text-white border border-gray-200 hover:bg-black gap-3 "
                    >
                        <span>Can I link accounts from different banks?</span>
                        <svg
                            className={`w-3 h-3 transform transition-transform ${open === 1 ? "-rotate-0" : "rotate-180"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 10 6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                {open === 4 && (
                    <div className="p-5 border border-t-0 border-gray-200">
                        <p className="mb-2  text-white">
                            Yes, you can link your current accounts from various banks with just a few clicks using a connected banking platform like Instantpay.
                        </p>
                    </div>
                )}
                {/* Accordion Item 5 */}
                <h2>
                    <button
                        onClick={() => toggle(5)}
                        className="flex items-center text-start justify-between w-full p-5 font-medium text-white border border-gray-200 hover:bg-black gap-3 "
                    >
                        <span>What major banks are supported by Instantpay?</span>
                        <svg
                            className={`w-3 h-3 transform transition-transform ${open === 1 ? "-rotate-0" : "rotate-180"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 10 6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                {open === 5 && (
                    <div className="p-5 border border-t-0 border-gray-200">
                        <p className="mb-2 text-white">
                            Instantpay connects with all major banks, providing a secure and reliable connection for managing your finances.
                        </p>
                    </div>
                )}
                {/* Accordion Item 6 */}
                <h2>
                    <button
                        onClick={() => toggle(6)}
                        className="flex items-center text-start justify-between w-full p-5 font-medium text-white border border-gray-200 hover:bg-black gap-3 "
                    >
                        <span>Is auto reconciliation possible with connected banking?</span>
                        <svg
                            className={`w-3 h-3 transform transition-transform ${open === 1 ? "-rotate-0" : "rotate-180"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 10 6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                {open === 6 && (
                    <div className="p-5 border border-t-0 border-gray-200">
                        <p className="mb-2  text-white">
                            Yes, auto reconciliation is possible with connected banking. It involves matching and categorising transactions across linked accounts automatically, which saves time and effort compared to manual bookkeeping.
                        </p>
                    </div>
                )}
                {/* Accordion Item 7 */}
                <h2>
                    <button
                        onClick={() => toggle(7)}
                        className="flex items-center text-start justify-between w-full p-5 font-medium text-white border border-gray-200 hover:bg-black gap-3 "
                    >
                        <span>Can I make direct payouts from connected accounts??</span>
                       <svg
                            className={`w-3 h-3 transform transition-transform ${open === 1 ? "-rotate-0" : "rotate-180"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 10 6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                {open === 7 && (
                    <div className="p-5 border border-t-0 border-gray-200">
                        <p className="mb-2  text-white">
                            Yes, you can initiate direct payouts from your connected bank account, reducing reliance on a single payout source.

                        </p>
                    </div>
                )}
                {/* Accordion Item 8 */}
                <h2>
                    <button
                        onClick={() => toggle(8)}
                        className="flex items-center text-start justify-between w-full p-5 font-medium text-white border border-gray-200 hover:bg-black gap-3 "
                    >
                        <span>What payment modes are supported through the current account?</span>
                        <svg
                            className={`w-3 h-3 transform transition-transform ${open === 1 ? "-rotate-0" : "rotate-180"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 10 6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                {open === 8 && (
                    <div className="p-5 border border-t-0 border-gray-200">
                        <p className="mb-2  text-white">
                            Instantpay facilitates payments through all major methods including IMPS, NEFT, RTGS, and UPI, ensuring instant and automated transactions.
                        </p>
                    </div>
                )}
                {/* Accordion Item 9 */}
                <h2>
                    <button
                        onClick={() => toggle(9)}
                        className="flex items-center text-start justify-between w-full p-5 font-medium text-white border border-gray-200 hover:bg-black gap-3 rounded-b-xl"
                    >
                        <span>How do I get started with connected banking?</span>
                        <svg
                            className={`w-3 h-3 transform transition-transform ${open === 1 ? "-rotate-0" : "rotate-180"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 10 6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                {open === 9 && (
                    <div className="p-5 border border-t-0  rounded-b-xl border-gray-200">
                        <p className="mb-2  text-white">
                            To get started with connected banking and experience the convenience of managing all your accounts in one place, simply sign up at Instantpay's. Our intuitive platform offers a seamless way to link and manage multiple bank accounts, providing you with real-time visibility and efficient financial management.

                        </p>
                        <p className="mb-2  text-white">Contact our dedicated sales team to begin your journey with Instantpay's connected banking solution.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Faq;
