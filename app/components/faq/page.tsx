"use client";

import { useState } from "react";
import 'aos/dist/aos.css'; 

const Faq = () => {
  // State typed for number | null
  const [open, setOpen] = useState<number | null>(null);

  // Toggle handler typed for numeric id
  const toggle = (id: number) => {
    setOpen(open === id ? null : id);
  };

  // Common data for FAQs
  const faqs = [
    {
      id: 1,
      question: "What is Connected Banking?",
      answer:
        "Connected banking, also known as open banking, allows you to connect all your bank accounts into a single platform. This way, businesses can see all their finances in one place, making it easier to manage them efficiently.",
    },
    {
      id: 2,
      question: "How does connected banking benefit businesses?",
      answer:
        "Connected banking offers real-time visibility, simplified financial management, direct payouts, automated reconciliation, and integration with major banks — streamlining operations and enhancing efficiency.",
    },
    {
      id: 3,
      question: "Is connected banking secure?",
      answer:
        "Yes, connected banking uses industry-leading encryption and authentication protocols to ensure the utmost security of your financial data.",
    },
    {
      id: 4,
      question: "Can I link accounts from different banks?",
      answer:
        "Yes, you can link your current accounts from various banks with just a few clicks using a connected banking platform.",
    },
    {
      id: 5,
      question: "What major banks are supported?",
      answer:
        "Most connected banking platforms integrate with all major banks, providing a secure and reliable connection for managing your finances.",
    },
    {
      id: 6,
      question: "Is auto reconciliation possible with connected banking?",
      answer:
        "Yes, auto reconciliation is possible. It matches and categorizes transactions across linked accounts automatically, saving time compared to manual bookkeeping.",
    },
    {
      id: 7,
      question: "Can I make direct payouts from connected accounts?",
      answer:
        "Yes, you can initiate direct payouts from your connected bank account, reducing reliance on a single payout source.",
    },
    {
      id: 8,
      question: "What payment modes are supported through the current account?",
      answer:
        "You can make payments via IMPS, NEFT, RTGS, and UPI — ensuring instant and automated transactions.",
    },
    {
      id: 9,
      question: "How do I get started with connected banking?",
      answer:
        "To get started, simply sign up on our connected banking platform. Link and manage multiple accounts, gain real-time visibility, and automate your financial operations effortlessly.",
    },
  ];

  return (
    <div className="h-banner blog-banner lg:py-40 py-20 lg:px-20 px-10">
      <div
        className="w-full relative gap-6 h-full mx-auto md:max-w-[1350px]"
        data-aos="fade-up"
      >
        {faqs.map((faq) => (
          <div key={faq.id}>
            <h2>
              <button
                onClick={() => toggle(faq.id)}
                className={`flex items-center text-start justify-between w-full p-5 font-medium text-white border border-gray-200 ${
                  faq.id === 1 ? "rounded-t-xl" : ""
                } ${faq.id === faqs.length ? "rounded-b-xl" : ""} hover:bg-black gap-3`}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-3 h-3 transform transition-transform ${
                    open === faq.id ? "-rotate-0" : "rotate-180"
                  }`}
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

            {open === faq.id && (
              <div className="p-5 border border-t-0 border-gray-200">
                <p className="mb-2 text-white">{faq.answer}</p>

                {/* Extra text for the last item */}
                {faq.id === 9 && (
                  <p className="mb-2 text-white">
                    Contact our dedicated sales team to begin your journey with
                    our connected banking solution.
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
